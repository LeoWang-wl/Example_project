<template>
  <div class="upload-card">
    <h2 class="upload-title">Upload file</h2>
    
    <div 
      class="upload-area"
      :class="{ 'drag-over': isDragOver }"
      @click="triggerFileInput"
      @dragover.prevent="handleDragOver"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
    >
      <img src="../assets/imgs/upload.png" alt="Upload" class="upload-icon" />
      <p class="upload-text">
        Drag your resume file to this area, or click on the area to select the appropriate file to upload
      </p>
      <input
        ref="fileInput"
        type="file"
        accept=".pdf,.doc,.docx,.txt"
        @change="handleFileSelect"
        class="file-input"
      />
    </div>

    <div class="button-group">
      <button class="btn btn-secondary" @click="handleLastStep">Last step</button>
      <button class="btn btn-primary" @click="handleFinish">Finish</button>
    </div>

    
    <div class="progress-steps">
      <div class="step completed"></div>
      <div class="step-line"></div>
      <div class="step completed">
        <div class="step-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
       
      </div>
      <div class="step-line"></div>
      <div class="step completed">
        <div class="step-icon">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
       
      </div>
      <div class="step-line"></div>
      <div class="step">
        <div class="step-icon">
          <span>3</span>
        </div>
        
      </div>
      <div class="step-line"></div>
    </div>

    <div v-if="selectedFile" class="selected-file">
      <span class="file-name">{{ selectedFile.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fileInput = ref(null)
const selectedFile = ref(null)
const isDragOver = ref(false)

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFileSelect = (event) => {
  const file = event.target.files[0]
  if (file) {
    selectedFile.value = file
  }
}

const handleDragOver = (event) => {
  isDragOver.value = true
}

const handleDragLeave = (event) => {
  isDragOver.value = false
}

const handleDrop = (event) => {
  isDragOver.value = false
  const files = event.dataTransfer.files
  if (files.length > 0) {
    selectedFile.value = files[0]
  }
}

const handleLastStep = () => {
  // 处理上一步逻辑
  console.log('Last step clicked')
}

const handleFinish = () => {
  // 处理完成逻辑
  console.log('Finish clicked')
}
</script>

<style scoped>
.upload-card {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 480px;
}

.upload-title {
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 24px 0;
  text-align: left;
}

.upload-area {
  border: 2px dashed #3b82f6;
  border-radius: 12px;
  background: #f0f9ff;
  padding: 40px 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 24px;
  position: relative;
}

.upload-area:hover {
  background: #e0f2fe;
  border-color: #2563eb;
}

.upload-area.drag-over {
  background: #dbeafe;
  border-color: #1d4ed8;
  transform: scale(1.02);
}

.upload-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
}

.upload-text {
  color: #64748b;
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}

.file-input {
  display: none;
}

.button-group {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
}

.btn {
  flex: 1;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary {
  background: #e0f2fe;
  color: #0369a1;
}

.btn-secondary:hover {
  background: #bae6fd;
  transform: translateY(-1px);
}

.btn-primary {
  background: #1e40af;
  color: white;
}

.btn-primary:hover {
  background: #1e3a8a;
  transform: translateY(-1px);
}

.progress-steps {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.step-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: white;
}

.step.completed .step-icon {
  background: #3b82f6;
}

.step:not(.completed) .step-icon {
  background: #e5e7eb;
  color: #6b7280;
}

.step-icon svg {
  width: 20px;
  height: 20px;
}

.step-text {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
}

.step-line {
  width: 40px;
  height: 2px;
  background: #e5e7eb;
}

.step.completed + .step-line {
  background: #3b82f6;
}

.selected-file {
  margin-top: 16px;
  padding: 12px;
  background: #f0f9ff;
  border-radius: 8px;
  border: 1px solid #bae6fd;
}

.file-name {
  color: #0369a1;
  font-size: 14px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .upload-card {
    padding: 24px;
    margin: 16px;
  }
  
  .button-group {
    flex-direction: column;
  }
  
  .progress-steps {
    gap: 4px;
  }
  
  .step-icon {
    width: 32px;
    height: 32px;
  }
  
  .step-line {
    width: 20px;
  }
}
</style> 