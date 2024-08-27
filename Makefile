
# Build the application
$(eval BUILD_TIME:=$(shell date -u '+%Y-%m-%dT%H:%M:%SZ'))
# Build file-process
build-dev:
	@docker build -t dieuhanh.nbca.gov.vn/vflowx/moi-truong-sync-service:latest-dev .

build:
	@docker build -t dieuhanh.nbca.gov.vn/vflowx/moi-truong-sync-service:latest -f Dockerfile.production .

deploy-dev:
	@$(eval BUILD_TIME:=$(shell date -u '+%Y-%m-%d'))
	@docker tag dieuhanh.nbca.gov.vn/vflowx/moi-truong-sync-service:latest-dev dieuhanh.nbca.gov.vn/vflowx/moi-truong-sync-service:$(BUILD_TIME)
	@docker push dieuhanh.nbca.gov.vn/vflowx/moi-truong-sync-service:$(BUILD_TIME)
	@docker push dieuhanh.nbca.gov.vn/vflowx/moi-truong-sync-service:latest-dev

deploy:
	@$(eval BUILD_TIME:=$(shell date -u '+%Y-%m-%d'))
	@docker tag dieuhanh.nbca.gov.vn/vflowx/moi-truong-sync-service:latest dieuhanh.nbca.gov.vn/vflowx/moi-truong-sync-service:$(BUILD_TIME)
	@docker push dieuhanh.nbca.gov.vn/vflowx/moi-truong-sync-service:$(BUILD_TIME)
	@docker push dieuhanh.nbca.gov.vn/vflowx/moi-truong-sync-service:latest