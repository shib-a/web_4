package com.example.web_4;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DatabaseService {
    private final PointRepository pointRepository;

    @Autowired
    public DatabaseService(PointRepository pointRepository) {
        this.pointRepository = pointRepository;
    }
    public Optional<Point> getAllByHitNotNull(){
        return pointRepository.getAllByHitNotNull();
    }
    Point save(Point point){
        return pointRepository.save(point);
    }
    void delete(Point point){
        pointRepository.delete(point);
    }
    void deleteAll(){
        pointRepository.deleteAll();
    }
}