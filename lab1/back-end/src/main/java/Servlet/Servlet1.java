package Servlet;

import Entity.Entity;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet("/Servlet1")
public class Servlet1 extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        Entity entity = new Entity("Entity", 18, 1.81f);
        Entity entity_x = new Entity("Entity2", 19, 1.61f);

        ArrayList<Entity> tents = new ArrayList<Entity>();
        tents.add(entity);
        tents.add(entity_x);

        out.println(tents);

    }

}
