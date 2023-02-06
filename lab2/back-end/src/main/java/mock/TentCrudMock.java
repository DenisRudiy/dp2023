package mock;

import crud.TentCrudInterface;
import entity.TentEntity;

public class TentCrudMock implements TentCrudInterface {

	@Override
	public TentEntity readEntity() {
		return new TentEntity("Tent", "assets/p_1.png",23, 3, "TEEEEENT");
	}

	@Override
	public void updateEntity(TentEntity entity) {

	}

}
