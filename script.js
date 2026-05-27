document.getElementById('send-btn').addEventListener('click', async () => {
    const webhookUrl = document.getElementById('webhook-url').value.trim();
    
    if (!webhookUrl) {
        alert('請先輸入 Webhook 網址！');
        return;
    }

    // 讀取輸入框數值
    const botName = document.getElementById('bot-name').value || "萬用發送器";
    const title = document.getElementById('embed-title').value;
    const desc = document.getElementById('embed-desc').value;
    const colorHex = document.getElementById('embed-color').value;

    // 將 Hex 顏色轉為 Discord 需要的十進位整數
    const colorInt = parseInt(colorHex.replace('#', ''), 16);

    // 打包符合 Discord 規範的 payload
    const payload = {
        username: botName,
        embeds: [{
            title: title || "無標題",
            description: desc || "無內容",
            color: colorInt
        }]
    };

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert('訊息發送成功！');
        } else {
            alert('發送失敗，請檢查 Webhook 網址是否正確或資料格式。');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('連線發生錯誤！');
    }
});
