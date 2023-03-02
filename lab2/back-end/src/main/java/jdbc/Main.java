package jdbc;

import entity.TentEntity;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;


public class Main {
    public static void main(String[] args) {

        // A SessionFactory is set up once for an application!
        final StandardServiceRegistry registry = new StandardServiceRegistryBuilder()
                .configure() // configures settings from hibernate.cfg.xml
                .build();
        try (SessionFactory sessionFactory = new MetadataSources(registry)
                .addAnnotatedClass(TentEntity.class)
                .buildMetadata()
                .buildSessionFactory()) {

            Session session = sessionFactory.openSession();
            session.beginTransaction();

            session.save(new TentEntity(
                    1
                    , "Tent High Peak Nevada 4"
                    ,"assets/p_1.png"
                    , 5
                    , 6
                    ,"Two-layer construction of the dome type with an " +
                    "additional arch for the vestibule."
            ));
            session.save(new TentEntity(
                    2
                    , "Tent Tramp TRT-126 Ranger 3 V2"
                    ,"assets/p_2.png"
                    , 5
                    , 5
                    ,"1 large entrance with a zipper, a " +
                    "door with a large mosquito net window."
            ));
            session.save(new TentEntity(
                    3
                    , "Highlander Blackthorn 2 tent"
                    ,"assets/p_3.png"
                    , 4
                    , 4
                    ,"Ventilation windows on the outer " +
                    "awning with folding racks-supports."
            ));
            session.save(new TentEntity(
                    4
                    , "Tent Easy Camp Blazar 300"
                    ,"assets/p_4.png"
                    , 4
                    , 7
                    ,"The arches are pre-curved to provide more space."
            ));session.save(new TentEntity(
                    5
                    , "Tent Tramp TRT-126 Ranger 4"
                    ,"assets/p_5.png"
                    , 4
                    , 8
                    ,"The bedroom has 2 large D-shaped zippered" +
                    " entrances with 2 runners, duplicated with mosquito nets"
            ));
            session.save(new TentEntity(
                    6
                    , "Tent High Peak Nevada 5"
                    ,"assets/p_6.png"
                    , 4
                    , 3
                    ,"The seams of the floor and " +
                    "awning are taped to protect against leaks."
            ));
            session.save(new TentEntity(
                    7
                    , "Tent Max Peak Nevada X"
                    ,"assets/p_7.png"
                    , 5
                    , 45
                    ,"The tent does not let in cold, " +
                    "heat, wind, rain and other weather disasters."
            ));
            session.save(new TentEntity(
                    8
                    , "Tent Max Peak Nevada XL"
                    ,"assets/p_8.png"
                    , 5
                    , 50
                    ,"The bedroom zippered entrances " +
                    "with 2 runners, duplicated with mosquito nets"
            ));


            session.getTransaction().commit();

        }
        System.out.println("You added all data in tents table! :D");
    }
}
