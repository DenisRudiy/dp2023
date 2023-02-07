package servlets;

import crud.TentCrud;
import crud.TentCrudInterface;

public class TentServletConfig implements TentServletConfigInterface {

    TentCrudInterface l2ci;


    public TentServletConfig() {
        this.l2ci = new TentCrud();
    }

    public void setL2ci(TentCrudInterface l2ci) {
        this.l2ci = l2ci;
    }



    @Override
    public TentCrudInterface getCrud() {
        return l2ci;
    }

}