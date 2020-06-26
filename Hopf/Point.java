import com.sun.j3d.utils.geometry.*;
import javax.media.j3d.*;
import javax.vecmath.*;
import java.awt.Color;

public class Point extends TransformGroup{
    public Point(Point3d loc){
        ColoringAttributes ca = new ColoringAttributes(1.0f, 1.0f, 1.0f, ColoringAttributes.NICEST);
        TransparencyAttributes ta = new TransparencyAttributes(TransparencyAttributes.NICEST, 0.0f);
        Appearance app = new Appearance();
        app.setColoringAttributes(ca);
        app.setTransparencyAttributes(ta);
        Sphere representation = new Sphere(.03f, app);
        Transform3D trans = new Transform3D();
        trans.set(new Vector3d(loc));
        TransformGroup wrap = new TransformGroup(trans);
        wrap.addChild(representation);
        this.addChild(wrap);
    }
    public Point(Point3d loc, Color3f col){
        ColoringAttributes ca = new ColoringAttributes(col, ColoringAttributes.NICEST);
        TransparencyAttributes ta = new TransparencyAttributes(TransparencyAttributes.NICEST, 0.0f);
        Appearance app = new Appearance();
        app.setColoringAttributes(ca);
        app.setTransparencyAttributes(ta);
        Sphere representation = new Sphere(.03f, app);
        Transform3D trans = new Transform3D();
        trans.set(new Vector3d(loc));
        TransformGroup wrap = new TransformGroup(trans);
        wrap.addChild(representation);
        this.addChild(wrap);
    }
}
