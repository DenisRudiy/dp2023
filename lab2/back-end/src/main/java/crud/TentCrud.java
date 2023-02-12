package crud;

import com.google.gson.JsonElement;
import com.google.gson.JsonIOException;
import com.google.gson.JsonParser;
import com.google.gson.JsonSyntaxException;
import entity.TentEntity;
import fileIO.FileIO;
import fileIO.FileIOInterface;
import jakarta.servlet.http.HttpServletRequest;

import java.io.IOException;
import java.util.Iterator;
import java.util.List;

public class TentCrud implements TentCrudInterface {

    FileIOInterface fio;

    public TentCrud() {
        this.fio = new FileIO();
    }

    @Override
    public TentEntity readEntity() {

        return (TentEntity) fio.loadFromFile();
    }

    @Override
    public void updateEntity(TentEntity entity) {
        fio.saveToFile(entity);
    }

    public JsonElement bodyParse(HttpServletRequest request) {
        JsonElement jsonElement=null;

        try {
            jsonElement = JsonParser.parseReader(request.getReader());
        } catch (JsonIOException | JsonSyntaxException | IOException e) {
            e.printStackTrace();
        }

        return jsonElement;
    }

    @Override
    public TentEntity tentParse(HttpServletRequest request) {
        TentEntity tent = new TentEntity();
        JsonElement jsonElement = bodyParse(request);
        tent.setId(jsonElement.getAsJsonObject().get("id").getAsInt());
        tent.setName(jsonElement.getAsJsonObject().get("name").getAsString());
        tent.setImg(jsonElement.getAsJsonObject().get("img").getAsString());
        tent.setRate(jsonElement.getAsJsonObject().get("rate").getAsInt());
        tent.setPrice(jsonElement.getAsJsonObject().get("price").getAsInt());
        tent.setDescription(jsonElement.getAsJsonObject().get("description").getAsString());
        return tent;
    }

    public int getIndexByTentId(int id, List<TentEntity> list) {
        int listId = id;

        Iterator<TentEntity> iterator = list.iterator();
        while(iterator.hasNext()) {
            TentEntity temp =iterator.next();
            if(temp.getId()==listId) {
                listId=list.indexOf(temp);
                break;
            }
        }
        return listId;
    }

    public int getNextId(List<TentEntity> list) {
        int maxId = 0;

        Iterator<TentEntity> iterator = list.iterator();
        while(iterator.hasNext()) {
            int currentId = iterator.next().getId();
            if(currentId>maxId) maxId=currentId;
        }
        return maxId+1;
    }

}