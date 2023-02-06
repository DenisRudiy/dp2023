package crud;

import entity.TentEntity;
import fileIO.FileIO;
import fileIO.FileIOInterface;

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

}
