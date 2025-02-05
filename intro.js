function showImages() {
    var button = document.getElementById('open');
    var form = document.getElementById('form');

    // 画像を表示
    form.style.display = 'block';

    // ボタンを非表示
    button.style.display = 'none';
}

// 「有名スポット」ボタンをクリックしたら画像を表示
document.getElementById('open').addEventListener('click', showImages);

const eventDate = new Date('2025-11-29T19:00:00'); // 年-月-日 時:分:秒

// 毎秒カウントダウンを更新
setInterval(function () {
    // 現在の時刻を取得
    const now = new Date();

    // 残り時間を計算
    const timeDifference = eventDate - now; // ミリ秒単位で差を計算

    // 時間、分、秒を計算
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerText = ` 神迎神事まで${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`;
}, 1000); // 1秒ごとに更新
