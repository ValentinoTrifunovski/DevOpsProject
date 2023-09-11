package mk.finki.ukim.mk.proekt.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class KeyChain {

    @Id
    @Column
    private String name;

    private String description;
    private int price;
    private boolean onStock;
    private String imageUrl;

    public KeyChain(){}
    public KeyChain(String name, String description, int price, boolean onStock, String imageUrl){
        this.name = name;
        this.description = description;
        this.price = price;
        this.onStock = onStock;
        this.imageUrl = imageUrl;
    }

    public boolean isOnStock() {
        return onStock;
    }

    public void setOnStock(boolean onStock) {
        this.onStock = onStock;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

}
