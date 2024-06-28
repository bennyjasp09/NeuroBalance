package com.neurobalance.service;

import com.neurobalance.dto.CognitiveTestResultDto;
import com.neurobalance.model.CognitiveTestResult;
import com.neurobalance.model.User;
import com.neurobalance.repository.CognitiveTestResultRepository;
import com.neurobalance.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CognitiveTestService {

    @Autowired
    private CognitiveTestResultRepository cognitiveTestResultRepository;

    @Autowired
    private UserRepository userRepository;

    public CognitiveTestResult saveTestResult(String email, CognitiveTestResultDto resultDto) {
        User user = userRepository.findByEmail(email);
        CognitiveTestResult result = new CognitiveTestResult(user, resultDto.getTestType(), resultDto.getScore());
        return cognitiveTestResultRepository.save(result);
    }

    public List<CognitiveTestResult> getUserTestResults(String email) {
        User user = userRepository.findByEmail(email);
        return cognitiveTestResultRepository.findByUserOrderByTakenAtDesc(user);
    }
}