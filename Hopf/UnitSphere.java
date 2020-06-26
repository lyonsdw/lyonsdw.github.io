import javax.media.j3d.*;
import javax.vecmath.Color3f;
import javax.vecmath.Point3d;
import com.sun.j3d.utils.geometry.NormalGenerator;
import com.sun.j3d.utils.geometry.GeometryInfo;

public class UnitSphere extends Shape3D{
    public UnitSphere(Color3f color, int div){
        Color3f eColor = new Color3f();
        eColor.scale(.4f, color);
        Color3f sColor = new Color3f(0.0f, 0.0f, 0.0f);
        Color3f objColor = color;
        Material m = new Material(objColor, eColor, objColor, sColor, 70.0f);
        ColoringAttributes ca = new ColoringAttributes(objColor, ColoringAttributes.NICEST);
        TransparencyAttributes ta = new TransparencyAttributes(TransparencyAttributes.NICEST, 0.5f);
//        PolygonAttributes pa = new PolygonAttributes(PolygonAttributes.POLYGON_LINE, PolygonAttributes.CULL_NONE, 0.0f);
        Appearance app = new Appearance();
        app.setColoringAttributes(ca);
//        app.setPolygonAttributes(pa);
        m.setLightingEnable(true);
        app.setMaterial(m);
        app.setTransparencyAttributes(ta);
        this.setAppearance(app);
        Point3d allPoints[] = new Point3d[div * div];
        double sa = 0.0;
        double inc = 2.0 * Math.PI / (double)div;
        int stripCounts[] = new int[div];
        for(int a = 0; a < div; a++){
            Point3d small[] = unitStrip(sa, div);
            for(int b = 0; b < small.length; b++){
                allPoints[(a * div) + b] = small[b];
            }
            sa += inc;
            stripCounts[a] = div;
        }
        GeometryInfo gi = new GeometryInfo(GeometryInfo.TRIANGLE_STRIP_ARRAY);
        gi.setStripCounts(stripCounts);
        gi.setCoordinates(allPoints);
        NormalGenerator ng = new NormalGenerator();
        ng.generateNormals(gi);
        this.setGeometry(gi.getGeometryArray());
    }
    private static Point3d[] unitStrip(double startAngle, int num){
        double theta = 2.0 * Math.PI / (double)num;
        Point3d points[] = new Point3d[num];
        points[num - 1] = new Point3d(0.0, 0.0, 1.0);
        points[0] = new Point3d(0.0, 0.0, -1.0);
        Transform3D rx = new Transform3D();
        rx.rotX(-theta);
        for(int a = 2; a < num; a += 2){
            points[a] = new Point3d();
            rx.transform(points[a - 2], points[a]);
        }
        Transform3D rz = new Transform3D();
        rz.rotZ(theta);
        for(int a = 2; a < num; a += 2){
            points[a - 1] = new Point3d();
            rz.transform(points[a], points[a - 1]);
        }
        Transform3D Rz = new Transform3D();
        Rz.rotZ(-startAngle);
        for(int a = 0; a < num; a++){
            Rz.transform(points[a]);
        }
        return points;
    }
}
