import javax.media.j3d.*;
import javax.vecmath.*;
import java.util.*;
import java.io.*;
import java.net.*;

public class FileDisplayer{
    public FileDisplayer(String filename, TransformGroup dots, TransformGroup circles, URL codeBase){
        ColorStepper colors = new ColorStepper();
        try{
            URL url = new URL(codeBase, filename);
	    BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream()));
            String line;
            while((line = reader.readLine()) != null){
                StringTokenizer stok = new StringTokenizer(line);
                if(stok.countTokens() != 3){
                    continue;
                }
                double x, y, z;
                x = Double.parseDouble(stok.nextToken());
                y = Double.parseDouble(stok.nextToken());
                z = Double.parseDouble(stok.nextToken());
                BranchGroup bg = new BranchGroup();
                bg.setCapability(BranchGroup.ALLOW_DETACH);
                Color3f col = colors.next();
                Point3d p = new Point3d(x, y, z);
                bg.addChild(new Point(p, col));
                dots.addChild(bg);
                BranchGroup cg = new BranchGroup();
                cg.setCapability(BranchGroup.ALLOW_DETACH);
                cg.addChild(HopfHelper.hopf(p, 100, col));
                circles.addChild(cg);
            }
        } catch(Exception e){}
    }
}
