package mk.finki.ukim.mk.proekt.model;

import lombok.Data;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Users {

    @Id
    @Column
    private String username;

    @Column
    private String password;

    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    @ManyToMany
    @Column
    private List<Key> keyList;

    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    @ManyToMany
    @Column
    private List<KeyChain> keyChainList;

    public Users(String username, String password){
        this.username = username;
        this.password = password;
    }

    public Users(String username, String password, List<Key> keyList, List<KeyChain> keyChainList){
        this.username = username;
        this.password = password;
        this.keyList = keyList;
        this.keyChainList = keyChainList;
    }

    public Users(){}

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Key> getKeyList() {
        return keyList;
    }

    public void setKeyList(List<Key> keyList) {
        this.keyList = keyList;
    }

    public List<KeyChain> getKeyChainList() {
        return keyChainList;
    }

    public void setKeyChainList(List<KeyChain> keyChainList) {
        this.keyChainList = keyChainList;
    }

    public void addToList(Key key){
        keyList.add(key);
    }

    public void addKeychainToList(KeyChain keyChain){keyChainList.add(keyChain);}

    public void removeFromList(Key key){
        keyList.remove(key);
    }
}
