<template>
  <div class="resume-upload-page">
    <div class="page-container">
      <!-- 左侧信息区域 -->
      <div class="left-section">
        <div class="content-wrapper">
          <h1 class="main-title">Finish!<br />Upload Your Resume</h1>
          <p class="description">
            Upload your resume, the platform will help you parse and optimize, you can also skip this step
          </p>
          <div class="illustration">
            <img src="../assets/imgs/image.png" alt="Illustration" class="illustration-img" />
          </div>
        </div>
      </div>

      <!-- 右侧上传区域 -->
      <div class="right-section">
        <FileUpload />
      </div>
    </div>
  </div>
</template>

<script setup>
import FileUpload from './FileUpload.vue'
</script>

<style scoped>
.resume-upload-page {
  width: 100vw;
  height: 100vh;
  background:  #F8FBF9 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.page-container {
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.left-section {
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
}

.content-wrapper {
  max-width: 500px;
  width: 100%;
}

.main-title {
  font-size: 48px;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1.1;
  margin: 0 0 24px 0;
}

.description {
  font-size: 18px;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 40px 0;
  max-width: 400px;
}

.illustration {
  display: flex;
  justify-content: center;
  align-items: center;
}

.illustration-img {
  max-width: 100%;
  height: auto;
  max-height: 300px;
}

.right-section {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .page-container {
    gap: 30px;
    padding: 16px;
  }
  
  .main-title {
    font-size: 40px;
  }
  
  .description {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .resume-upload-page {
    height: auto;
    min-height: 100vh;
  }
  
  .page-container {
    flex-direction: column;
    gap: 40px;
    padding: 20px 16px;
    height: auto;
    min-height: 100vh;
  }
  
  .left-section {
    order: 2;
    text-align: center;
    height: auto;
  }
  
  .right-section {
    order: 1;
    width: 100%;
    height: auto;
  }
  
  .main-title {
    font-size: 36px;
  }
  
  .description {
    font-size: 16px;
    margin: 0 auto 30px auto;
  }
  
  .illustration-img {
    max-height: 250px;
  }
}

@media (max-width: 480px) {
  .page-container {
    padding: 16px;
  }
  
  .main-title {
    font-size: 32px;
  }
  
  .description {
    font-size: 15px;
  }
  
  .illustration-img {
    max-height: 200px;
  }
}
</style> 