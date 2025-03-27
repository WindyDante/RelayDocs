# 快速开始

## 环境准备

✅ 确保你的开发环境满足以下要求：

- JDK 17+
- Node.js 18+
- Docker

## 三步部署

### 1. 克隆仓库

```bash
git clone --depth 1 https://github.com/your-relay-repo
```

### 2. 基础设施配置

```yaml
relay:
  datasource:
    type: mysql
    pool-size: 20
```

### 3. 双端启动

后端启动：
```bash
mvn spring-boot:run -Dspring.profiles.active=dev
```

前端启动：
```bash
pnpm dev --port 4173
```

## 验证部署

访问以下地址验证部署是否成功：

- 前端页面：http://localhost:4173
- API文档：http://localhost:8080/swagger-ui.html
- 健康检查：http://localhost:8080/actuator/health