package Servlet;

import Entity.Entity;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import javax.xml.stream.events.EntityReference;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/Servlet1")
public class Servlet1 extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        Entity entity = new Entity("Entity", 18, 1.81f);

        out.println("["+entity+"]");

    }

}
