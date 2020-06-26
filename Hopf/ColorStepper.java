import javax.vecmath.Color3f;

public class ColorStepper{
    private float r, g, b;
    private int idx, inc = 17;
    public ColorStepper(){
        r = 255.0f;
        g = b = 0.0f;
        idx = 0;
    }
    public void reset(){
        r = 255.0f;
        g = b = 0.0f;
        idx = 0;
    }
    public Color3f next(){
        if(idx < 255){
            g += inc;
        } else if(idx < 510){
            r -= inc;
        } else if(idx < 765){
            b += inc;
        } else if(idx < 1020){
            g -= inc;
        } else if(idx < 1275){
            r += inc;
        } else if(idx < 1530){
            b -= inc;
        }
        idx += inc;
        if(idx == 1530){
            idx = 0;
        }
        return new Color3f(r / 255.0f, g / 255.0f, b / 255.0f);
    }
}
