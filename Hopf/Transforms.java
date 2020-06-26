import com.sun.j3d.utils.universe.*;
import com.sun.j3d.utils.geometry.*;
import javax.media.j3d.*;
import javax.vecmath.*;

public class Transforms{
    public static TransformGroup wrap(Shape3D shape){
        TransformGroup ret = new TransformGroup();
        ret.addChild(shape);
        return ret;
    }
    public static TransformGroup wrap(TransformGroup g){
        TransformGroup ret = new TransformGroup();
        ret.addChild(g);
        return ret;
    }
    public static TransformGroup setSpinning(TransformGroup tg, Alpha timer, double bsSize){
        TransformGroup spinGroup = new TransformGroup();
        spinGroup.setCapability(TransformGroup.ALLOW_TRANSFORM_WRITE);
        spinGroup.addChild(tg);
        Transform3D spinTransform = new Transform3D();
        RotationInterpolator interpolator = new RotationInterpolator(
            timer, spinGroup, spinTransform, 0.0f, (float) Math.PI * 2.0f);
        BoundingSphere bounds = new BoundingSphere(new Point3d(0, 0, 0), bsSize);
        interpolator.setSchedulingBounds(bounds);
        spinGroup.addChild(interpolator);
        return wrap(spinGroup);
    }
    public static TransformGroup rotateGroup(
                  TransformGroup tg, double rx, double ry, double rz){
        Transform3D rxTransform = new Transform3D();
        rxTransform.rotX(rx);
        Transform3D ryTransform = new Transform3D();
        ryTransform.rotY(ry);
        Transform3D rzTransform = new Transform3D();
        rzTransform.rotZ(rz);
        TransformGroup rxGroup = new TransformGroup(rxTransform);
        TransformGroup ryGroup = new TransformGroup(ryTransform);
        TransformGroup rzGroup = new TransformGroup(rzTransform);
        rzGroup.addChild(tg);
        ryGroup.addChild(rzGroup);
        rxGroup.addChild(ryGroup);
        return wrap(rxGroup);
    }
    public static TransformGroup translateGroup(
                  TransformGroup tg, double tx, double ty, double tz){
        Transform3D trans = new Transform3D();
        trans.set(new Vector3d(tx, ty, tz));
        TransformGroup group = new TransformGroup(trans);
        group.addChild(tg);
        return wrap(group);
    }
    public static TransformGroup translateGroup(TransformGroup tg, Vector3d v){
        Transform3D trans = new Transform3D();
        trans.set(v);
        TransformGroup group = new TransformGroup(trans);
        group.addChild(tg);
        return wrap(group);
    }
    public static TransformGroup translateGroup(TransformGroup tg, Point3d p){
        Transform3D trans = new Transform3D();
        trans.set(new Vector3d(p.x, p.y, p.z));
        TransformGroup group = new TransformGroup(trans);
        group.addChild(tg);
        return wrap(group);
    }
    public static void setViewPoint(
                  double tx, double ty, double tz, SimpleUniverse univ){
        TransformGroup vpGroup = univ.getViewingPlatform().getViewPlatformTransform();
        Transform3D vpTransform = new Transform3D();
        vpTransform.lookAt(new Point3d(tx, ty, tz), new Point3d(0.0, 0.0, 0.0), new Vector3d(0.0, 1.0, 0.0));
        vpTransform.invert();
        vpGroup.setTransform(vpTransform);
    }
    public static void setViewPoint(Point3d point, SimpleUniverse univ){
        TransformGroup vpGroup = univ.getViewingPlatform().getViewPlatformTransform();
        Transform3D vpTransform = new Transform3D();
        vpTransform.lookAt(point, new Point3d(0.0, 0.0, 0.0), new Vector3d(0.0, 1.0, 0.0));
        vpTransform.invert();
        vpGroup.setTransform(vpTransform);
    }
};
