import com.sun.j3d.utils.geometry.*;
import javax.media.j3d.*;
import javax.vecmath.*;

public class Axes extends TransformGroup{
    private Line axises[] = new Line[6];
    private final Point3d origin = new Point3d(0.0, 0.0, 0.0);
    public Axes(){
        LineAttributes dashed = new LineAttributes(1.0f, LineAttributes.PATTERN_DASH, true);
        for(int a = 0; a < 3; a++){
            double x = (a + 1 - (a / 2)) % 2, y = a % 2, z = a / 2;
            axises[a] = new Line(origin, new Point3d(x, y, z), new Color3f((float)x, (float)y, (float)z));
            axises[a + 3] = new Line(origin, new Point3d(-x, -y, -z), new Color3f((float)x, (float)y, (float)z), dashed);
            this.addChild(axises[a]);
            this.addChild(axises[a + 3]);
        }
    }
    public Axes(LineAttributes posAttrib, LineAttributes negAttrib){
        for(int a = 0; a < 3; a++){
            double x = (a + 1 - (a / 2)) % 2, y = a % 2, z = a / 2;
            axises[a] = new Line(origin, new Point3d(x, y, z), new Color3f((float)x, (float)y, (float)z), posAttrib);
            axises[a + 3] = new Line(origin, new Point3d(-x, -y, -z), new Color3f((float)x, (float)y, (float)z), negAttrib);
            this.addChild(axises[a]);
            this.addChild(axises[a + 3]);
        }
    }
    public Axes(double length){
        LineAttributes dashed = new LineAttributes(1.0f, LineAttributes.PATTERN_DASH, true);
        for(int a = 0; a < 3; a++){
            double x = (a + 1 - (a / 2)) % 2, y = a % 2, z = a / 2;
            double sx = length * x, sy = length * y, sz = length * z;
            axises[a] = new Line(origin, new Point3d(sx, sy, sz), new Color3f((float)x, (float)y, (float)z));
            axises[a + 3] = new Line(origin, new Point3d(-sx, -sy, -sz), new Color3f((float)x, (float)y, (float)z), dashed);
            this.addChild(axises[a]);
            this.addChild(axises[a + 3]);
        }
    }
    public Axes(double length, LineAttributes posAttrib, LineAttributes negAttrib){
        for(int a = 0; a < 3; a++){
            double x = (a + 1 - (a / 2)) % 2, y = a % 2, z = a / 2;
            double sx = length * x, sy = length * y, sz = length * z;
            axises[a] = new Line(origin, new Point3d(sx, sy, sz), new Color3f((float)x, (float)y, (float)z), posAttrib);
            axises[a + 3] = new Line(origin, new Point3d(-sx, -sy, -sz), new Color3f((float)x, (float)y, (float)z), negAttrib);
            this.addChild(axises[a]);
            this.addChild(axises[a + 3]);
        }
    }
    public void setTransparent(boolean go){
        for(int a = 0; a < 6; a++){
            axises[a].setTransparent(go);
        }
    }
}
