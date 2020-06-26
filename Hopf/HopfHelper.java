import javax.vecmath.*;
import javax.media.j3d.TransformGroup;

public class HopfHelper{
    public static TransformGroup hopf(Point3d point, int numLines, Color3f color){
        TransformGroup ret = new TransformGroup();
        Point4d base = basePoint(point);
        Point3d[] projections = new Point3d[numLines];
        for(int a = 0; a < numLines; a++){
            projections[a] = project(timesExpITheta(base, 2.0 * ((double)a) * Math.PI / ((double)numLines)));
        }
        return Transforms.wrap(new Circle(projections, color));
    }
    private static Point4d basePoint(Point3d point){
        if(point.x == -1){
            return new Point4d(0.0, 0.0, 0.0, 1.0);
        }
        double coeff = 1.0 / Math.sqrt(2.0 * (1.0 + point.x));
        return new Point4d(0.0d, (1 + point.x) * coeff, point.y * coeff, point.z * coeff);
    }
    private static Point4d timesExpITheta(Point4d r, double t){
        double c = Math.cos(t);
        double s = Math.sin(t);
        double p1 = (r.x * c) - (r.y * s);
        double p2 = (r.y * c) + (r.x * s);
        double p3 = (r.z * c) + (r.w * s);
        double p4 = (r.w * c) - (r.z * s);
        return new Point4d(p1, p2, p3, p4);
    }
    private static Point3d project(Point4d quat){
        return new Point3d(quat.y / (1 - quat.x), quat.z / (1 - quat.x), quat.w / (1 - quat.x));
    }
}