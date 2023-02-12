package crud;

import com.google.gson.JsonElement;
import entity.TentEntity;
import jakarta.servlet.http.HttpServletRequest;

import java.util.List;

public interface TentCrudInterface {
    public TentEntity readEntity();
    public void updateEntity(TentEntity entity);
    TentEntity tentParse(HttpServletRequest request);

    int getIndexByTentId(int id, List<TentEntity> lu);

    int getNextId(List<TentEntity> lu);
}