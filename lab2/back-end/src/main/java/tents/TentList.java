package tents;

import entity.TentEntity;

import java.util.ArrayList;
import java.util.List;

public class TentList {
    private List<TentEntity> tentList = new ArrayList<>();

    public TentList() {
        this.tentList.add(new TentEntity(0, "Tent High Peak Nevada 4","assets/p_1.png", 5,
                6, "Two-layer construction of the dome type with an additional arch for the vestibule."));

        this.tentList.add(new TentEntity(1, "Tent Tramp TRT-126 Ranger 3 V2","assets/p_2.png", 5,
                5, "1 large entrance with a zipper, a door with a large mosquito net window."));

        this.tentList.add(new TentEntity(2, "Highlander Blackthorn 2 tent","assets/p_3.png", 4,
                4, "Ventilation windows on the outer awning with folding racks-supports."));

        this.tentList.add(new TentEntity(3, "Tent Easy Camp Blazar 300","assets/p_4.png", 4,
                7, "The arches are pre-curved to provide more space."));

        this.tentList.add(new TentEntity(4, "Tent Tramp TRT-126 Ranger 3 V2","assets/p_5.png", 4,
                8, "The bedroom has 2 large D-shaped zippered entrances with 2 runners, duplicated with mosquito nets"));

        this.tentList.add(new TentEntity(5, "Tent High Peak Nevada 5","assets/p_6.png", 4,
                3, "The seams of the floor and awning are taped to protect against leaks."));

        this.tentList.add(new TentEntity(6, "Tent Max Peak Nevada X","assets/p_7.png", 5,
                45, "The tent does not let in cold, heat, wind, rain and other weather disasters."));

        this.tentList.add(new TentEntity(7, "Tent Max Peak Nevada XL","assets/p_8.png", 4,
                50, "The bedroom zippered entrances with 2 runners, duplicated with mosquito nets"));
    }

    public List<TentEntity> getTentList() {
        return tentList;
    }

    public void setTentList(List<TentEntity> tentList) {
        this.tentList = tentList;
    }



}
