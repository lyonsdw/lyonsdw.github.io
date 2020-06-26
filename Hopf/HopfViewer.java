import java.awt.*;
import java.awt.event.*;
import java.applet.Applet;
import javax.media.j3d.*;
import javax.vecmath.*;
import javax.swing.*;
import java.io.File;
import com.sun.j3d.utils.behaviors.vp.*;
import com.sun.j3d.utils.behaviors.keyboard.*;
import com.sun.j3d.utils.applet.MainFrame;
import com.sun.j3d.utils.universe.*;
import com.sun.j3d.utils.geometry.Sphere;
import com.sun.j3d.utils.geometry.ColorCube;
import com.sun.j3d.utils.picking.PickTool;

public class HopfViewer extends Applet implements ActionListener{
    private static int WIDTH, HEIGHT;
    private final Point3d leftStartViewPoint = new Point3d(3.0, 3.0, 3.0);
	private final Point3d rightStartViewPoint = new Point3d(5.0, 5.0, 5.0);
    private final BoundingSphere bounder = new BoundingSphere(new Point3d(0.0, 0.0, 0.0), 100.0);
    private boolean transparentAxes;
	private boolean spinningUniverse;
    private Canvas3D leftCanvas;
    private SimpleUniverse leftUniverse, rightUniverse;
    private BranchGroup leftScene;
    private TransformGroup dotsGroup, circlesGroup, rightGroup;
    private Axes leftAxes, rightAxes;
    private ClickBehavior clickBehavior;
    private JCheckBox transBox, spinBox;
    private JComboBox resetMenu;;
	private JButton textButton, presetButton;
	private JTextField textX, textY, textZ;

    public static void main(String[] args){
		if(args.length == 2){
			try {
				WIDTH = Integer.parseInt(args[0]);
				HEIGHT = Integer.parseInt(args[1]);
			} catch (Exception e){
				WIDTH = 800;
				HEIGHT = 455;
			}
			if((WIDTH < 1) || (HEIGHT < 1)){
				WIDTH = 800;
				HEIGHT = 455;
			}
		} else {
			WIDTH = 800;
			HEIGHT = 455;
		}
        Frame frame = new MainFrame(new HopfViewer(), WIDTH, HEIGHT);
    }
    public HopfViewer(){
        transparentAxes = false;
		spinningUniverse = false;
        GraphicsConfiguration config = SimpleUniverse.getPreferredConfiguration();
        setLayout(new BorderLayout());
        add(constructUniversesPanel(config), BorderLayout.CENTER);
        add(constructButtonsPanel(), BorderLayout.SOUTH);
		clickBehavior.setTexts(textX, textY, textZ);
    }
    private JPanel constructUniversesPanel(GraphicsConfiguration gc){
        JPanel ret = new JPanel();
          ret.setLayout(new FlowLayout());
        constructLeftUniverse(gc);
        Canvas3D rightCanvas = constructRightUniverse(gc);
        clickBehavior.setDots(dotsGroup);
        clickBehavior.setCircles(circlesGroup);
        ret.add(leftCanvas);
        ret.add(rightCanvas);
        return ret;
    }
    private void constructLeftUniverse(GraphicsConfiguration gc){
        leftCanvas = new Canvas3D(gc);
        leftCanvas.setSize((WIDTH / 2) - 10, HEIGHT - 45);
        OrbitBehavior orbiter = new OrbitBehavior(leftCanvas, OrbitBehavior.REVERSE_ALL | OrbitBehavior.STOP_ZOOM | OrbitBehavior.DISABLE_TRANSLATE);
        orbiter.setSchedulingBounds(bounder);
        orbiter.setMinRadius(2.0);
        leftUniverse = new SimpleUniverse(leftCanvas);
        Transforms.setViewPoint(leftStartViewPoint, leftUniverse);
        leftUniverse.getViewingPlatform().setViewPlatformBehavior(orbiter);
        leftScene = new BranchGroup();
        TransformGroup tg = new TransformGroup();
        leftAxes = new Axes(2.0);
        tg.addChild(leftAxes);
        UnitSphere us = new UnitSphere(new Color3f(0.0f, 0.8f, 0.0f), 32);
        us.setCapability(UnitSphere.ALLOW_GEOMETRY_READ);
        PickTool.setCapabilities(us, PickTool.INTERSECT_FULL);
        tg.addChild(us);
        DirectionalLight dl = new DirectionalLight();
        dl.setDirection(0.0f, 0.0f, -1.0f);
        dl.setColor(new Color3f(1.0f, 1.0f, 1.0f));
        dl.setInfluencingBounds(bounder);
        tg.addChild(dl);
        DirectionalLight dl2 = new DirectionalLight();
        dl2.setDirection(0.0f, 0.0f, 1.0f);
        dl2.setColor(new Color3f(.5f, .5f, .5f));
        dl2.setInfluencingBounds(bounder);
        tg.addChild(dl2);
        leftScene.addChild(tg);
        dotsGroup = new TransformGroup();
        setCapabilities(dotsGroup);
        leftScene.addChild(dotsGroup);
        clickBehavior = new ClickBehavior(leftScene, leftCanvas);
        clickBehavior.setSchedulingBounds(bounder);
        leftScene.addChild(clickBehavior);
		Background bg = new Background(new Color3f(1.0f, 1.0f, 1.0f));
		bg.setApplicationBounds(bounder);
		leftScene.addChild(bg);
        leftUniverse.addBranchGraph(leftScene);
    }
    private Canvas3D constructRightUniverse(GraphicsConfiguration gc){
        Canvas3D ret = new Canvas3D(gc);
        ret.setSize((WIDTH / 2) - 10, HEIGHT - 45);
        OrbitBehavior orbiter = new OrbitBehavior(ret, OrbitBehavior.REVERSE_ALL);
        orbiter.setSchedulingBounds(bounder);
        rightUniverse = new SimpleUniverse(ret);
        Transforms.setViewPoint(rightStartViewPoint, rightUniverse);
        rightUniverse.getViewingPlatform().setViewPlatformBehavior(orbiter);
        BranchGroup rightScene = new BranchGroup();
        rightGroup = new TransformGroup();
        rightGroup.setCapability(TransformGroup.ALLOW_TRANSFORM_READ);
        rightGroup.setCapability(TransformGroup.ALLOW_TRANSFORM_WRITE);
        setCapabilities(rightGroup);
        circlesGroup = new TransformGroup();
        setCapabilities(circlesGroup);
        rightAxes = new Axes(2.0);
        rightGroup.addChild(circlesGroup);
        rightGroup.addChild(rightAxes);
        rightScene.addChild(rightGroup);
		Background bg = new Background(new Color3f(1.0f, 1.0f, 1.0f));
		bg.setApplicationBounds(bounder);
		rightScene.addChild(bg);
        rightUniverse.addBranchGraph(rightScene);
        return ret;
    }
    private JPanel constructButtonsPanel(){
        JPanel ret = new JPanel();
          ret.setLayout(new FlowLayout());
        transBox = new JCheckBox("Transparent Axes");
          transBox.addActionListener(this);
          ret.add(transBox);
		spinBox = new JCheckBox("Spinning");
		  spinBox.addActionListener(this);
		  ret.add(spinBox);
        String resets[] = {"Resets", "----------", "Reset All", "Reset View", "Clear Circles"};
        resetMenu = new JComboBox(resets);
          resetMenu.addActionListener(this);
          ret.add(resetMenu);
		presetButton = new JButton("Presets...");
		  presetButton.addActionListener(this);
		  ret.add(presetButton);
		textButton = new JButton("Go!");
  		  textButton.addActionListener(this);
		textX = new JTextField("0.00", 7);
		  ret.add(textX);
		textY = new JTextField("0.00", 7);
		  ret.add(textY);
		textZ = new JTextField("0.00", 7);
		  ret.add(textZ);
		ret.add(textButton);
        return ret;
    }
    public void actionPerformed(ActionEvent ae){
        Object source = ae.getSource();
        if(source == transBox){
            transparentAxes = !transparentAxes;
            leftAxes.setTransparent(transparentAxes);
            rightAxes.setTransparent(transparentAxes);
		} else if(source == spinBox){
			spinningUniverse = !spinningUniverse;
			if(spinningUniverse){
				Transform3D t = new Transform3D();
				makeRotation(t);
			} else {
				clearRotations();
			}
        } else if(source == resetMenu){
            int which = ((JComboBox)source).getSelectedIndex();
            if(which == 2){
                Transforms.setViewPoint(leftStartViewPoint, leftUniverse);
                Transforms.setViewPoint(rightStartViewPoint, rightUniverse);
                rightGroup.setTransform(new Transform3D());
                int cn = circlesGroup.numChildren(), dn = dotsGroup.numChildren();
                for(int a = 0; a < cn; a++){
                    circlesGroup.removeChild(0);
                }
                for(int a = 0; a < dn; a++){
                    dotsGroup.removeChild(0);
                }
                clickBehavior.resetColors();
                Transforms.setViewPoint(leftStartViewPoint, leftUniverse);
                Transforms.setViewPoint(rightStartViewPoint, rightUniverse);
                rightGroup.setTransform(new Transform3D());
            } else if(which == 3){
                Transforms.setViewPoint(leftStartViewPoint, leftUniverse);
                Transforms.setViewPoint(rightStartViewPoint, rightUniverse);
                rightGroup.setTransform(new Transform3D());
            } else if(which == 4){
                int cn = circlesGroup.numChildren(), dn = dotsGroup.numChildren();
                for(int a = 0; a < cn; a++){
                    circlesGroup.removeChild(0);
                }
                for(int a = 0; a < dn; a++){
                    dotsGroup.removeChild(0);
                }
                clickBehavior.resetColors();
			}
            ((JComboBox)source).setSelectedIndex(0);
			resetText();
		} else if(source == presetButton){
			try{
				JFileChooser chooser = new JFileChooser("./bpfs/");
				chooser.setMultiSelectionEnabled(true);
				chooser.setAcceptAllFileFilterUsed(false);
				MyFilter filter = new MyFilter();
				chooser.setFileFilter(filter);
				int ret = chooser.showOpenDialog(null);
				if(ret == JFileChooser.APPROVE_OPTION){
					File[] files = chooser.getSelectedFiles();
					for(int a = 0; a < files.length; a++){
						FileDisplayer fd = new FileDisplayer("./bpfs/" + files[a].getName(), dotsGroup, circlesGroup, getCodeBase());
					}
				}
				resetText();
			} catch(Exception e){}
        } else if(source == textButton){
			double x, y, z;
			try{
				x = Double.parseDouble(textX.getText());
				y = Double.parseDouble(textY.getText());
				z = Double.parseDouble(textZ.getText());
				Point3d p = new Point3d(x, y, z);
				p.scale(1/Math.sqrt(x*x + y*y + z*z));
				Color3f col = clickBehavior.getColorStepper().next();
				BranchGroup dot = new BranchGroup();
				dot.setCapability(BranchGroup.ALLOW_DETACH);
				dot.addChild(Transforms.wrap(new Point(p, col)));
				dotsGroup.addChild(dot);
				BranchGroup circ = new BranchGroup();
				circ.setCapability(BranchGroup.ALLOW_DETACH);
				circ.addChild(HopfHelper.hopf(p, 100, col));
				circlesGroup.addChild(circ);
				textX.setText(Double.toString(p.x).substring(0, 9));
				textY.setText(Double.toString(p.y).substring(0, 9));
				textZ.setText(Double.toString(p.z).substring(0, 9));
			} catch(Exception e) {}											 
		}
    }
	private void resetText(){
		textX.setText("0.00");
		textY.setText("0.00");
		textZ.setText("0.00");
	}
    private void makeRotation(Transform3D trans){
        Transform3D base = new Transform3D();
        rightGroup.getTransform(base);
        trans.mul(base, trans);
        BranchGroup b = new BranchGroup();
        b.setCapability(BranchGroup.ALLOW_DETACH);
        RotationInterpolator it = new RotationInterpolator(new Alpha(-1, 5000),
                rightGroup, trans, 0.0f, 2.0f * (float)Math.PI);
        it.setSchedulingBounds(bounder);
        b.addChild(it);
        rightGroup.addChild(b);
    }
    private void clearRotations(){
        if(rightGroup.numChildren() == 3){
            rightGroup.removeChild(2);
        }
    }
    private void setCapabilities(TransformGroup tg){
        tg.setCapability(TransformGroup.ALLOW_CHILDREN_EXTEND);
        tg.setCapability(TransformGroup.ALLOW_CHILDREN_WRITE);
        tg.setCapability(TransformGroup.ALLOW_CHILDREN_READ);
    }
}
