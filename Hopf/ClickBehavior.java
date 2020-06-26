import java.awt.event.*;
import java.awt.AWTEvent;
import java.util.Enumeration;
import javax.swing.JTextField;
import javax.vecmath.*;
import javax.media.j3d.*;
import com.sun.j3d.utils.universe.SimpleUniverse;
import com.sun.j3d.utils.geometry.Sphere;
import com.sun.j3d.utils.geometry.Primitive;
import com.sun.j3d.utils.picking.*;

public class ClickBehavior extends Behavior{
    private TransformGroup dotsGroup, circleGroup;
    private ColorStepper colors;
    private PickCanvas pickCanvas;
	private JTextField textX, textY, textZ;
    public ClickBehavior(BranchGroup lg, Canvas3D lc){
        dotsGroup = null;
        circleGroup = null;
        colors = new ColorStepper();
        pickCanvas = new PickCanvas(lc, lg);
    }
    public void resetColors(){
        colors.reset();
    }
	public ColorStepper getColorStepper(){
		return colors;
	}
    public void setDots(TransformGroup dg){
        dotsGroup = dg;
    }
    public void setCircles(TransformGroup cg){
        circleGroup = cg;
    }
	public void setTexts(JTextField tx, JTextField ty, JTextField tz){
		textX = tx;
		textY = ty;
		textZ = tz;
	}
    public void initialize(){
        wakeupOn(new WakeupOnAWTEvent(MouseEvent.MOUSE_CLICKED));
    }
    public void processStimulus(Enumeration criteria){
        AWTEvent whatHappened[] = ((WakeupOnAWTEvent)criteria.nextElement()).getAWTEvent();
        for(int a = 0; a < whatHappened.length; a++){
            if(whatHappened[a] instanceof MouseEvent){
                MouseEvent mc = (MouseEvent)whatHappened[a];
                int x = mc.getX(), y = mc.getY();
                pickCanvas.setShapeLocation(x, y);
                Point3d eyePos = pickCanvas.getStartPosition();
                PickResult result[] = pickCanvas.pickAllSorted();
                if(result == null){
                    continue;
                } else if(result.length == 1){
                        didIntersection(result[0], eyePos);
                } else if(result.length >= 2){
                    int idx = 0;
                    while(!didIntersection(result[idx], eyePos)){
                        idx++;
						if(idx >= result.length){ break; }
                    }
                }
            }
        }
        wakeupOn(new WakeupOnAWTEvent(MouseEvent.MOUSE_CLICKED));
    }
    private boolean didIntersection(PickResult pr, Point3d eyePos){
        try{
            PickIntersection pickInter = pr.getClosestIntersection(eyePos);
            Point3d actual = pickInter.getPointCoordinates();
			double ax, ay, az;
			ax = actual.x;
			ay = actual.y;
			az = actual.z;
			actual.scale(1/Math.sqrt(ax*ax + ay*ay + az*az));
            Color3f col = colors.next();
            BranchGroup dot = new BranchGroup();
            dot.setCapability(BranchGroup.ALLOW_DETACH);
            dot.addChild(Transforms.wrap(new Point(actual, col)));
            dotsGroup.addChild(dot);
            BranchGroup circ = new BranchGroup();
            circ.setCapability(BranchGroup.ALLOW_DETACH);
            circ.addChild(HopfHelper.hopf(actual, 100, col));
            circleGroup.addChild(circ);
			textX.setText(Double.toString(actual.x).substring(0, 9));
			textY.setText(Double.toString(actual.y).substring(0, 9));
			textZ.setText(Double.toString(actual.z).substring(0, 9));
        } catch(CapabilityNotSetException cnse){
            return false;
        } catch(NullPointerException npe){
            return false;
        }
        return true;
    }
}
