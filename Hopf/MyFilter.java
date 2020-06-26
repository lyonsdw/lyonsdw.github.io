import java.io.File;
import javax.swing.filechooser.*;

public class MyFilter extends FileFilter{
	public boolean accept(File f){
		String s = f.getName();
		return s.substring(s.length() - 4, s.length()).equals(".bpf");
	}
	public String getDescription(){
		return "Base Point Files (*.bpf)";
	}
}
