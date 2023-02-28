package servlets;

import com.google.gson.Gson;
import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import entity.TentEntity;
import jdbc.SqlCRUD;

@WebServlet("/TentServlet/*")
public class TentServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    TentCRUDInterface<TentEntity> crud = new SqlCRUD();

    List<TentEntity> list = new ArrayList<>();

    public void init(ServletConfig config) throws ServletException {
        crud = new SqlCRUD();

    }
    public void destroy() {
        try {
            ((SqlCRUD) crud).getConnection().close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("application/json");
        response.getWriter().println(crud.read());
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        TentEntity tent = CRUDConfig.tentParse(request);
        crud.create(tent);
        doGet(request, response);
    }

    protected void doPut(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        TentEntity tent = CRUDConfig.tentParse(request);
        int id = Integer.parseInt(request.getPathInfo().substring(1));
        response.setContentType("application/json");
        crud.update(id, tent);
        doGet(request, response);
    }

    protected void doDelete(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        int id = Integer.parseInt(request.getPathInfo().substring(1));
        response.setContentType("application/json");
        crud.delete(id);
        doGet(request, response);
    }

}