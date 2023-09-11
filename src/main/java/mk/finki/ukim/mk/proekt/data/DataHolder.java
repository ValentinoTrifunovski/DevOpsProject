package mk.finki.ukim.mk.proekt.data;

import lombok.Data;
import lombok.Getter;
import mk.finki.ukim.mk.proekt.model.Car;
import mk.finki.ukim.mk.proekt.model.Key;
import mk.finki.ukim.mk.proekt.model.KeyChain;
import mk.finki.ukim.mk.proekt.model.Users;
import mk.finki.ukim.mk.proekt.repository.jpa.JpaCarRepository;
import mk.finki.ukim.mk.proekt.repository.jpa.JpaKeyChainRepository;
import mk.finki.ukim.mk.proekt.repository.jpa.JpaKeyRepository;
import mk.finki.ukim.mk.proekt.repository.jpa.JpaUsersRepository;
import org.apache.catalina.User;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.*;

@Component
@Getter
public class DataHolder {

    public static final List<Car> carList = new ArrayList<>();
    public static final List<Key> keyList = new ArrayList<>();
    public static final List<KeyChain> keyChainList = new ArrayList<>();
    public static final List<Users> usersList = new ArrayList<>();
    public static final Map<String,Car> carMap = new HashMap<>();

    public final JpaCarRepository carRepository;
    public final JpaKeyRepository keyRepository;
    public final JpaKeyChainRepository keyChainRepository;
    public final JpaUsersRepository usersRepository;


    DataHolder(JpaCarRepository carRepository, JpaKeyRepository keyRepository, JpaKeyChainRepository keyChainRepository, JpaUsersRepository usersRepository){
        this.carRepository = carRepository;
        this.keyRepository = keyRepository;
        this.keyChainRepository = keyChainRepository;
        this.usersRepository = usersRepository;

    }

    @PostConstruct
    public void init(){

//        final Car AudiA32004= new Car("2341","Audi","A3",2004);
//        final Car MercedesC220 = new Car("1151","Mercedes","C220",2010);
//        final Car MercedesC220_1 = new Car("12345","Mercedes","C220",2012);
//        final Car MercedesC200 = new Car("1121","Mercedes","C200",2015);
//
//        //final Users user = new Users("petar","p123");
//
//        Key k = new Key("AudiA3_2004",13,"u5d description ...",100,true,"https://s.yimg.com/aah/yhst-54572186103590/2010-bmw-5-series-remote-keyless-entry-key-5.jpg", AudiA32004);
//        keyList.add(k);
//        keyList.add(new Key("benz2",15,"u1d description ...",100,true,"https://s.yimg.com/aah/yhst-54572186103590/2010-bmw-5-series-remote-keyless-entry-key-5.jpg",MercedesC220));
//        keyList.add(new Key("benz3",15,"u1d description ...",100,false,"https://s.yimg.com/aah/yhst-54572186103590/2010-bmw-5-series-remote-keyless-entry-key-5.jpg",MercedesC220));
//        keyList.add(new Key("bbbbbbbbbb",15,"u1d description ...",100,false,"https://s.yimg.com/aah/yhst-54572186103590/2010-bmw-5-series-remote-keyless-entry-key-5.jpg",MercedesC220_1));
//        keyList.add(new Key("AudiA3_2004_1",17,"sf6 description ...",100,true,"https://s.yimg.com/aah/yhst-54572186103590/2010-bmw-5-series-remote-keyless-entry-key-5.jpg", AudiA32004));
//        keyList.add(new Key("BENZC220_2010",15,"m3f description ...",100,true,"https://s.yimg.com/aah/yhst-54572186103590/2010-bmw-5-series-remote-keyless-entry-key-5.jpg", MercedesC220));
//
//        KeyChain keyChain1 = new KeyChain("u5dChain","description chain", 50, true, "https://s.yimg.com/aah/yhst-54572186103590/ford-lincoln-key-fob-smart-remote-silicone-rubber-cover-20.jpg");
//
//        keyChainList.add(keyChain1);
//
//        carList.add(AudiA32004);
//        carList.add(MercedesC220);
//        carList.add(MercedesC220_1);
//        carList.add(MercedesC200);

//        user.setKeyList(keyList);
//        usersList.add(user);
//
//        user.setKeyChainList(keyChainList);
//
//        if(this.carRepository.count() == 0) {
//            this.carRepository.saveAll(carList);
//            this.keyRepository.saveAll(keyList);
//            this.keyChainRepository.saveAll(keyChainList);
//            this.usersRepository.saveAll(usersList);
//        }
    }

}

