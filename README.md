
## 스프린트 미션2 요구사항
- [v] 클래스 구현하기: class 키워드를 이용해서 Product 클래스와 ElectronicProduct 클래스와 Article 클래스를 만들어 주세요.
   - [v] Product 클래스는 
      - [v] name(상품명) description(상품 설명), price(판매 가격), tags(해시태그 배열), images(이미지 배열), favoriteCount(찜하기 수)프로퍼티를 가집니다.
      - [v] favorite 메소드를 가집니다. favorite 메소드가 호출될 경우 찜하기 수가 1 증가합니다.
   - [v] ElectronicProduct 클래스는 
      - [v] Product를 상속하며, 추가로 manufacturer(제조사) 프로퍼티를 가집니다.
   - [v] Article 클래스는 
      - [v] title(제목), content(내용), image(이미지), likeCount(좋아요 수) 프로퍼티를 가집니다.
      - [v] like 메소드를 가집니다. like 메소드가 호출될 경우 좋아요 수가 1 증가합니다.
   - [v] 각 클래스 마다 constructor를 작성해 주세요.
   - [v] 추상화/캡슐화/상속/다형성을 고려하여 코드를 작성해 주세요.

- [v] Article 요청 함수 구현하기
   - [v] https://panda-market-api-crud.vercel.app/docs 의 Article API를 이용하여 아래 함수들을 구현해 주세요.
   - [v] getArticleList() : GET 메소드를 사용해 주세요.
      - [v] page, pageSize, keyword 쿼리 파라미터를 이용해 주세요.
   - [v] getArticle() : GET 메소드를 사용해 주세요.
   - [v] createArticle() : POST 메소드를 사용해 주세요.
      - [v] request body에 title, content, image 를 포함해 주세요.

## 멘토에게