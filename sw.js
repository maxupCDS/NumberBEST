<script>
// 서비스 워커 등록 코드 (이게 있어야 스마트폰이 앱으로 인식합니다)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(() => console.log("서비스 워커 등록 완료!"))
    .catch(err => console.log("등록 실패:", err));
}
</script>