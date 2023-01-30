package Servlet;


import Entity.Entity;
import Entity.TentEntity;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet("/TentServlet")
public class TentServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        TentEntity entity1 = new TentEntity(
                "Tent High Peak Nevada 4 (Dark Grey/Red), 4-person",
                "assets/p_1.png",
                5.2f,
                5,
                "Two-layer construction of the dome type with an additional arch for the vestibule.Outdoor " +
                        "awning made of polyester with PU impregnation, water resistance 3,000 mm H2O.Inner tent " +
                        "(bedroom) made of breathable polyester for improved ventilation.The seams of the floor " +
                        "and awning are taped to protect against leaks.");

        TentEntity entity2 = new TentEntity(
                "Tent Tramp TRT-126 Ranger 3 V2 (Green/Yellow), 3-seater",
                "assets/p_2.png",
                5.5f,
                5,
                "1 large entrance with a zipper, a door with a large mosquito net window. " +
                        "The seams of the floor and awning are taped to protect against leaks." +
                        "Mesh ventilation inserts on the bedroom walls." +
                        "Bracket for hanging the lamp under the ceiling.");

        TentEntity entity3 = new TentEntity(
                "Highlander Blackthorn 2 tent (HMTC), 2-person",
                "assets/p_3.png",
                4.2f,
                5,
                "Ventilation windows on the outer awning with folding racks-supports." +
                        "Storm braces and steel pegs for fixing the tent (included)." +
                        "Bracket for hanging the lamp under the ceiling." +
                        "Outdoor awning made of polyester with PU impregnation, water resistance 3,000 mm H2O.");

        TentEntity entity4 = new TentEntity(
                "Tent Easy Camp Blazar 300 (Rustic Green), 3-seater",
                "assets/p_4.png",
                7f,
                5,
                "The arches are pre-curved to provide more space." +
                        "Two ventilation windows on the ends of the tent." +
                        "Polyurethane coated fabric is water resistant to 2000mm H2O." +
                        "It has taped seams, which also ensures water resistance.");

        ArrayList<TentEntity> tents = new ArrayList<TentEntity>();
        tents.add(entity1);
        tents.add(entity2);
        tents.add(entity3);
        tents.add(entity4);

        out.println(tents);
    }
}
