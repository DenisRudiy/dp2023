package servlets;

import com.google.gson.Gson;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import crud.TentCrudInterface;
import entity.TentEntity;
import tents.TentList;

@WebServlet("/TentServlet/*")
public class TentServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private List<TentEntity> lu = new TentList().getTentList();

    TentServletConfigInterface servletConfig;
    TentCrudInterface lab3Crud;

    public TentServlet() {
        super();
        this.servletConfig = new TentServletConfig();
        this.lab3Crud = servletConfig.getCrud();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        response.setContentType("application/json");

        String TentJson = new Gson().toJson(lu);
        PrintWriter out = response.getWriter();
        out.print(TentJson);
        out.flush();
    }

    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        TentEntity user = lab3Crud.tentParse(request);
        int id = Integer.parseInt(request.getPathInfo().substring(1));
        response.setContentType("application/json");
        int index = lab3Crud.getIndexByTentId(id, lu);
        lu.set(index,user);
        doGet(request, response);

    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        TentEntity tent = lab3Crud.tentParse(request);
        tent.setId(lab3Crud.getNextId(lu));
        lu.add(tent);
        doGet(request, response);

    }

    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        int id = Integer.parseInt(request.getPathInfo().substring(1));
        response.setContentType("application/json");
        int index = lab3Crud.getIndexByTentId(id, lu);
        lu.remove(index);
        doGet(request, response);
    }

}