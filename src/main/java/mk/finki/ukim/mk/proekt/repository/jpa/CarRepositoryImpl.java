package mk.finki.ukim.mk.proekt.repository.jpa;

import mk.finki.ukim.mk.proekt.model.Car;
import mk.finki.ukim.mk.proekt.model.Key;
import mk.finki.ukim.mk.proekt.repository.CarRepository;
import mk.finki.ukim.mk.proekt.repository.KeyRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class CarRepositoryImpl implements CarRepository {

    private final JpaCarRepository carRepository;

    public CarRepositoryImpl(JpaCarRepository carRepository){
        this.carRepository = carRepository;
    }

    @Override
    public Car save(Car car) {
        return this.carRepository.save(car);
    }

    @Override
    public List<Car> getAllCars() {
        return this.carRepository.findAll();
    }

    @Override
    public List<Car> searchCars(String name) {
        return null;
    }

    @Override
    public Optional<Car> findById(String carId) {
        return this.carRepository.findById(carId);
    }

    @Override
    public void saveAll(List<Car> carList) {
         this.carRepository.saveAll(carList);
    }

    @Override
    public void deleteById(String carId) {
         this.carRepository.deleteById(carId);
    }
}
