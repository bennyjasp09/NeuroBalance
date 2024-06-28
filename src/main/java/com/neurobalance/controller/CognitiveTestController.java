package com.neurobalance.controller;

import com.neurobalance.dto.CognitiveTestResultDto;
import com.neurobalance.model.CognitiveTestResult;
import com.neurobalance.service.CognitiveTestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cognitive-tests")
public class CognitiveTestController {

    @Autowired
    private CognitiveTestService cognitiveTestService;

    @PostMapping("/results")
    public ResponseEntity<CognitiveTestResult> saveTestResult(Authentication authentication, @RequestBody CognitiveTestResultDto resultDto) {
        CognitiveTestResult savedResult = cognitiveTestService.saveTestResult(authentication.getName(), resultDto);
        return ResponseEntity.ok(savedResult);
    }

    @GetMapping("/results")
    public ResponseEntity<List<CognitiveTestResult>> getUserTestResults(Authentication authentication) {
        List<CognitiveTestResult> results = cognitiveTestService.getUserTestResults(authentication.getName());
        return ResponseEntity.ok(results);
    }
}