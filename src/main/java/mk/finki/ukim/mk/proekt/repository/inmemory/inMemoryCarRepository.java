package mk.finki.ukim.mk.proekt.repository.inmemory;

import mk.finki.ukim.mk.proekt.data.DataHolder;
import mk.finki.ukim.mk.proekt.model.Car;
import mk.finki.ukim.mk.proekt.repository.CarRepository;
import org.springframework.stereotype.Repository;

import javax.xml.crypto.Data;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

public class inMemoryCarRepository implements CarRepository {
    @Override
    public Car save(Car car) {
        this.findById(car.getCarId()) .ifPresent(DataHolder.carList::remove);
        DataHolder.carList.add(car);
        return car;
    }

    @Override
    public List<Car> getAllCars() {
        return DataHolder.carList;
    }

    @Override
    public List<Car> searchCars(String brand) {
        return DataHolder.carList.stream()
                .filter(car -> car.getCarBrand().equals(brand))
                .collect(Collectors.toList());
    }

    @Override
    public Optional<Car> findById(String carId) {
        return DataHolder.carList.stream()
                .filter(car -> car.getCarId().equals(carId))
                .findFirst();
    }

    @Override
    public void saveAll(List<Car> carList) {
        DataHolder.carList.addAll(carList);
    }

    @Override
    public void deleteById(String carId) {
        this.findById(carId).ifPresent(DataHolder.carList::remove);
    }
}
