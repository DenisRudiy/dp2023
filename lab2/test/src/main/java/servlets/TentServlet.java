package servlets;

import entities.TentEntity;
import jakarta.servlet.ServletConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jdbc.SqlCRUD;

import java.io.IOException;
import java.sql.SQLException;

@WebServlet("/TentServlet/*")
public class TentServlet extends HttpServlet {

    private static final long serialVersionUID = 1L;

    TentCRUDInterface<TentEntity> crud = new SqlCRUD();

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

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
//		System.out.println(((SqlCRUD) crud).getConnection());
        response.getWriter().println(crud.read());
    }

}
