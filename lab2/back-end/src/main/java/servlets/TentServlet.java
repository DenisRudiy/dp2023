package servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

import crud.TentCrudInterface;
import entity.TentEntity;

@WebServlet("/TentServlet")
public class TentServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    TentServletConfigInterface servletConfig;
    TentCrudInterface lab2Crud;

    public TentServlet() {
        super();
        this.servletConfig = new TentServletConfig();
        this.lab2Crud = servletConfig.getCrud();
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();
        out.println("["+lab2Crud.readEntity()+"]");
    }

    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String name = request.getParameter("name");
        String img = request.getParameter("img");
        int rate = Integer.parseInt(request.getParameter("rate"));
        int price = Integer.parseInt(request.getParameter("price"));
        String description = request.getParameter("description");

        lab2Crud.updateEntity(new TentEntity(name,img,rate,price,description));

    }

}