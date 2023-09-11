package mk.finki.ukim.mk.proekt.service;

import mk.finki.ukim.mk.proekt.exceptions.CarNotFoundException;
import mk.finki.ukim.mk.proekt.model.Car;
import mk.finki.ukim.mk.proekt.model.Key;

import java.util.List;
import java.util.Optional;

public interface CarService {
   // String carId, String carBrand, String carModel

    Car createCar(String carId, String carBrand, String carModel,int year);

    Car createCar(Car c);

    List<Car> getAllCars();

    Optional<Car> getCar(String carId);

    Car updateCar(String carId, String carBrand, String carModel, List<Key> keyList);

    Car updateCar(String carId, Car c);

    void deleteCar(String carId);

    List<Car> searchCarsNewerThan(int year);

    List<Car> searchCarsOlderThan(int year);

    List<Car> searchCars (String brand, String model, int year);

    List<Key>  searchKeysByCarBrandModel (String brand, String model) throws CarNotFoundException;

    List<Key> searchKeysByCar(String carBrand, String carModel, int year) throws CarNotFoundException;

    List<Key> searchKeysByCarBrand(String carBrand);

}
