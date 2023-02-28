package jdbc;

import entities.TentEntity;
import servlets.TentCRUDInterface;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class SqlCRUD implements TentCRUDInterface<TentEntity> {
    Connection connection;


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
        try (PreparedStatement st = connection.prepareStatement(
                "INSERT INTO tents (name,img,price,rate,description) "
                        + "VALUES (?,?,?,?,?)")) {
            st.setString(1, tentEntity.getName());
            st.setString(2, tentEntity.getImg());
            st.setInt(3, tentEntity.getPrice());
            st.setInt(4, tentEntity.getRate());
            st.setString(5, tentEntity.getDescription());
            st.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<TentEntity> read() {
        List<TentEntity> list = new ArrayList<>();

        try (Statement st = connection.createStatement(); ResultSet rs = st.executeQuery(
                "SELECT * FROM tents;");) {
            while (rs.next()) {
                list.add(new TentEntity(
                        rs.getInt(1),
                        rs.getString(2),
                        rs.getString(3),
                        rs.getInt(4),
                        rs.getInt(5),
                        rs.getString(6)
                ));
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }

        return list;
    }

    @Override
    public void update(int id, TentEntity tentEntity) {

    }

    @Override
    public void delete(int id) {

    }
}
