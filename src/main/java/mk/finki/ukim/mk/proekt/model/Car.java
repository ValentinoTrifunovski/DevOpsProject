package mk.finki.ukim.mk.proekt.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
public class Car {

    @Id
    String carId;

    @OneToMany(mappedBy = "car",cascade = CascadeType.ALL)
    private List<Key> keyList;

    @Column
    private String carBrand;
    @Column
    private String carModel;
    @Column
    private int year;

    public Car(){
        keyList = new ArrayList<>();
    }

    public Car(String carId, String carBrand, String carModel, int year){
        this.carId = carId;
        this.carBrand = carBrand;
        this.carModel = carModel;
        this.year = year;

    }

    public void addKey(Key key){
        keyList.add(key);
    }

    public String getCarId() {
        return carId;
    }

    public void setCarId(String carId) {
        this.carId = carId;
    }

    public List<Key> getKeyList() {
        return keyList;
    }

    public void setKeyList(List<Key> keyList) {
       this.keyList = keyList;
    }

    public String getCarBrand() {
        return carBrand;
    }

    public void setCarBrand(String carBrand) {
        this.carBrand = carBrand;
    }

    public String getCarModel() {
        return carModel;
    }

    public void setCarModel(String carModel) {
        this.carModel = carModel;
    }
    
    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

  /*  @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        this.keyList.forEach(key -> sb.append(key.getName()).append(" "));

        return "Brand: " + this.carBrand + "Model: " + this.carModel + "Id: " + "\n" + this.carId + "\n" + "List of keys: " + sb.toString();
    } */
}
