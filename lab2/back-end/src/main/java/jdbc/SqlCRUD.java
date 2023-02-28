package jdbc;

import entity.TentEntity;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import servlets.CRUDConfig;
import servlets.TentCRUDInterface;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class SqlCRUD implements TentCRUDInterface<TentEntity> {
    Connection connection;
    List<TentEntity> list = new ArrayList<>();

    public SqlCRUD() {
        this.connection = new Connect().getCon();
        System.out.println(connection);
    }

    public Connection getConnection() {
        return connection;
    }

    public void setConnection(Connection connection) {
        this.connection = connection;
    }


    @Override
    public void create(TentEntity tentEntity) {
        final StandardServiceRegistry registry = new StandardServiceRegistryBuilder()
                .configure()
                .build();
        try (SessionFactory sessionFactory = new MetadataSources(registry)
                .addAnnotatedClass(TentEntity.class)
                .buildMetadata()
                .buildSessionFactory()) {

            Session session = sessionFactory.openSession();
            session.beginTransaction();

            int id = CRUDConfig.getNextId(list);

            session.save(new TentEntity(
                    id,
                    tentEntity.getName(),
                    tentEntity.getImg(),
                    tentEntity.getRate(),
                    tentEntity.getPrice(),
                    tentEntity.getDescription())
            );

            session.getTransaction().commit();
        }
    }

    @Override
    public List<TentEntity> read() {
        final StandardServiceRegistry registry = new StandardServiceRegistryBuilder()
                .configure()
                .build();
        try (SessionFactory sessionFactory = new MetadataSources(registry)
                .addAnnotatedClass(TentEntity.class)
                .buildMetadata()
                .buildSessionFactory()) {

            Session session = sessionFactory.openSession();
            session.beginTransaction();

            list = (List<TentEntity>) session.createQuery("from TentEntity").list();

            session.getTransaction().commit();
        }

        return list;
    }

    @Override
    public void update(int id, TentEntity tentEntity) {
        final StandardServiceRegistry registry = new StandardServiceRegistryBuilder()
                .configure()
                .build();
        try (SessionFactory sessionFactory = new MetadataSources(registry)
                .addAnnotatedClass(TentEntity.class)
                .buildMetadata()
                .buildSessionFactory()) {

            Session session = sessionFactory.openSession();
            session.beginTransaction();

            TentEntity updateTent = new TentEntity(
                    id,
                    tentEntity.getName(),
                    tentEntity.getImg(),
                    tentEntity.getRate(),
                    tentEntity.getPrice(),
                    tentEntity.getDescription()
            );

            session.update(updateTent);

            session.getTransaction().commit();
        }
    }

    @Override
    public void delete(int id) {
        try (PreparedStatement st = connection
                .prepareStatement("DELETE FROM tents WHERE id=?;")) {
            st.setInt(1, id);
            st.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
