import com.sun.j3d.utils.geometry.*;
import javax.media.j3d.*;
import javax.vecmath.*;
import java.awt.Color;

public class Line extends Shape3D{
    Appearance app;
    public Line(Point3d from, Point3d to, Color3f col){
        LineArray geom = new LineArray(2, LineArray.COORDINATES | LineArray.COLOR_3);
        geom.setCoordinate(0, from);
        geom.setCoordinate(1, to);
        geom.setColor(0, col);
        geom.setColor(1, col);
        app = new Appearance();
        TransparencyAttributes ta = new TransparencyAttributes();
        ta.setCapability(TransparencyAttributes.ALLOW_VALUE_READ);
        ta.setCapability(TransparencyAttributes.ALLOW_VALUE_WRITE);
        ta.setTransparencyMode(TransparencyAttributes.NICEST);
        app.setTransparencyAttributes(ta);
        app.setCapability(Appearance.ALLOW_TRANSPARENCY_ATTRIBUTES_READ);
        app.setCapability(Appearance.ALLOW_TRANSPARENCY_ATTRIBUTES_WRITE);
        this.setGeometry(geom);
        this.setAppearance(app);
    }
    public Line(Point3d from, Point3d to, Color3f col, Appearance givenApp){
        LineArray geom = new LineArray(2, LineArray.COORDINATES | LineArray.COLOR_3);
        geom.setCoordinate(0, from);
        geom.setCoordinate(1, to);
        geom.setColor(0, col);
        geom.setColor(1, col);
        this.setGeometry(geom);
        app = givenApp;
        this.setAppearance(app);
    }
    public Line(Point3d from, Point3d to, Color3f col, LineAttributes la){
        LineArray geom = new LineArray(2, LineArray.COORDINATES | LineArray.COLOR_3);
        geom.setCoordinate(0, from);
        geom.setCoordinate(1, to);
        geom.setColor(0, col);
        geom.setColor(1, col);
        app = new Appearance();
        TransparencyAttributes ta = new TransparencyAttributes(TransparencyAttributes.NICEST, 0.0f);
        ta.setCapability(TransparencyAttributes.ALLOW_VALUE_READ);
        ta.setCapability(TransparencyAttributes.ALLOW_VALUE_WRITE);
        app.setTransparencyAttributes(ta);
        app.setCapability(Appearance.ALLOW_TRANSPARENCY_ATTRIBUTES_READ);
        app.setCapability(Appearance.ALLOW_TRANSPARENCY_ATTRIBUTES_WRITE);
        app.setLineAttributes(la);
        this.setGeometry(geom);
        this.setAppearance(app);
    }
    public void setTransparent(boolean go){
        app.getTransparencyAttributes().setTransparency((go) ? 1.0f : 0.0f);
    }
}
