<template>
    <div>
        <h1>数据:</h1>
        <div>
            <ul>
                <li>累计访问量: {{ web_visit_count }}</li>
                <li>项目总访问量: {{ projects_visit_count }}</li>
                <li>总下载量: {{ download_count }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            web_visit_count: '未获取到数据',
            projects_visit_count: '未获取到数据',
            download_count: '未获取到数据',
            parseddata: {}
        }
    },
    async created() { // 页面加载完成后执行
        await this.getWebData();
        await this.addVisitCount();
    },
    methods: {
        async getWebData() {
            try {
                const response = await fetch('http://xnors.pythonanywhere.com/get_web_data'); //https://xnors.pythonanywhere.com/get_web_data

                // 检查响应是否正常
                if (!response.ok) {
                    throw new Error('网络响应不正常，状态码:' + response.status);
                }

                const data = await response.json();

                this.parseddata = JSON.parse(data);

                this.web_visit_count = this.parseddata.web_visit_count;
                this.projects_visit_count = this.parseddata.projects_visit_count;
                this.download_count = this.parseddata.download_count;

                console.log('获取数据成功:', JSON.parse(data));
            } catch (error) {
                console.error('获取数据失败:', error);
                // 这里可以进行一些用户提示或其他处理
            }
        },
        async addVisitCount() {
            try {
                // POST 请求
                const response = await fetch('http://xnors.pythonanywhere.com/web_data_add1', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        what: 'web_visit_count'
                    })
                });

                // 检查响应是否正常
                if (!response.ok) {
                    throw new Error('网络响应不正常，状态码:' + response.status);
                }

                const data = await response.json();

                console.log('增加访问量成功:', data);
            } catch (error) {
                console.error('增加访问量失败:', error);
                // 这里可以进行一些用户提示或其他处理
            }
        }
    }
}
</script>

<style lang="scss">
h1,
li {
    font-family: 'deyihei';
    letter-spacing: 2px;
    color: rgba($color: #ffffff, $alpha: 0.8);
}
</style>
