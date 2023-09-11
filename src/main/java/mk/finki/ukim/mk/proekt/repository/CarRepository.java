package mk.finki.ukim.mk.proekt.repository;

import mk.finki.ukim.mk.proekt.model.Car;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

public interface CarRepository {

    Car save(Car car);

    List<Car> getAllCars();

    List<Car> searchCars(String name);

    Optional<Car> findById(String carId);

    void saveAll(List<Car> carList);

    void deleteById(String carId);

}
