package fileIO;

import entity.TentEntity;

public class Main {

    public static void main(String[] args) {

        TentEntity entity = new TentEntity(1, "Tent1", "assets/p_1.png", 23, 3, "So good Tent");

        FileIOInterface fio = new FileIO();

        fio.saveToFile(entity);

        System.out.println((TentEntity) fio.loadFromFile());


    }

}
