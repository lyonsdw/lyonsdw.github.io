import com.sun.j3d.utils.geometry.*;
import javax.media.j3d.*;
import javax.vecmath.*;
import java.awt.Color;

public class Circle extends Shape3D{
    public Circle(double radius, int numLines, Color3f color){
        LineArray geom = new LineArray(numLines * 2, LineArray.COORDINATES | LineArray.COLOR_3);
        for(int a = 0; a < numLines; a++){
            double t1 = ((double)a / (double)numLines) * (2 * Math.PI);
            double t2 = ((double)(a + 1) / (double)numLines) * (2 * Math.PI);
            double x1 = radius * Math.cos(t1);
            double y1 = radius * Math.sin(t1);
            double x2 = radius * Math.cos(t2);
            double y2 = radius * Math.sin(t2);
            geom.setCoordinate(2 * a, new Point3d(x1, y1, 0.0));
            geom.setCoordinate((2 * a) + 1, new Point3d(x2, y2, 0.0));
            geom.setColor(2 * a, color);
            geom.setColor((2 * a) + 1, color);
        }
        this.setGeometry(geom);
        this.setAppearance(new Appearance());
    }
    public Circle(Point3d[] points, Color3f color){
        LineArray geom = new LineArray(points.length * 2, LineArray.COORDINATES | LineArray.COLOR_3);
        for(int a = 0; a < points.length - 1; a++){
            geom.setCoordinate(2 * a, points[a]);
            geom.setCoordinate((2 * a) + 1, points[a + 1]);
        }
        int idx = (2 * points.length) - 2;
        geom.setCoordinate(idx, points[points.length - 1]);
        geom.setCoordinate(idx + 1, points[0]);
        for(int a = 0; a < 2 * points.length; a++){
            geom.setColor(a, color);
        }
        this.setGeometry(geom);
        this.setAppearance(new Appearance());
    }
}
