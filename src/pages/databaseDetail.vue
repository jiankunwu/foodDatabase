<template>
    <div id="databaseDetail">
        <el-container>
            <el-header class="dbDetailHeader" style="height: 80px;">
                <div>
                    <a href="#/DatabaseHome">Home</a>
                    <a href="#">Contact Us</a>
                </div>
            </el-header>
            <el-container class="dbDetailContainer">
                <el-main width="750px">
                    <h4>GB 10765-2010 National Food Safety Standard Infant formula</h4>
                    <ul class="shareLists">
                        <li>
                            <a href="#">
                                <img src="https://cosmetic.chemlinked.com/sites/default/files/cdn/img/cosme_linkedin.png"
                                     alt="LinkedIn">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="https://cosmetic.chemlinked.com/sites/default/files/cdn/img/cosme_facebook.png"
                                     alt="Facebook">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="https://cosmetic.chemlinked.com/sites/default/files/cdn/img/cosme_twitter.png"
                                     alt="twitter">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="https://cosmetic.chemlinked.com/sites/default/files/cdn/img/cosme_twitter.png"
                                     alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="https://cosmetic.chemlinked.com/sites/default/files/cdn/img/cosme_twitter.png"
                                     alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="https://cosmetic.chemlinked.com/sites/default/files/cdn/img/cosme_twitter.png"
                                     alt="">
                            </a>
                        </li>
                        <li>
                            <a style="cursor: pointer;" @click="dbStoreDialog = true">
                                <img src="https://cosmetic.chemlinked.com/sites/default/files/cdn/img/cosme_twitter.png"
                                     alt="">
                            </a>
                        </li>
                    </ul>
                    <div class="dbStoreAlert">
                        <el-dialog title="TIPS" :visible.sync="dbStoreDialog" width="30%" :modal="false"
                                   :close-on-click-modal="false">
                            <span>Alert me for further updates?</span>
                            <span slot="footer" class="dialog-footer">
                                <el-button style="padding: 7px 13px" type="info" plain @click="dbStoreDialog = false">Cancel</el-button>
                                <el-button style="padding: 7px 13px" type="success" @click="dbStore">Confirm</el-button>
                            </span>
                        </el-dialog>
                    </div>
                    <h5>Basic information </h5>
                    <el-table :data="tableDetailData" border style="width: 100%"
                              empty-text="Nothing">
                        <el-table-column :resizable="false" prop="date" label="Local name" className="column1"
                                         width="260"></el-table-column>
                        <el-table-column :resizable="false" prop="name" label="食品安全国际标准 婴儿配方产品"></el-table-column>
                    </el-table>

                    <h5>Introduction </h5>
                    <p class="IntroductionText">
                        Infant formula in this standard is for babies of 1—12months_ Gd 10766-2010 outlines requirements
                        for raw materials of
                        infant formula and sensory requirements, lists mandatory and optional components, prescribes the
                        limits of
                        contaminants, mycotoxlns and microorganism and also covers requirements for food additives,
                        labeling and packaging.
                    </p>

                    <h5>History </h5>
                    <ul class="historyLists">
                        <li>Replaced by <a href="#">Gd 10766-2018 </a></li>
                        <li>Replace <a href="#">Gd 10766-1997 </a></li>
                    </ul>

                    <h5>Document reference </h5>
                    <ul class="referenceLists historyLists">
                        <li><a href="#">Gd 10766-2018 </a></li>
                        <li><a href="#">Gd 10766-1997 </a></li>
                    </ul>

                    <h5>Related standard/regulation </h5>
                    <ul class="referenceLists historyLists">
                        <li><a href="#">Gd 10767-2010 National Food Safety Standard Older Infants and Young Children
                            Formula</a></li>
                        <li><a href="#">Gd 10767-2010 National Food Safety Standard Older Infants and Young Children
                            Formula</a></li>
                        <li><a href="#">Gd 10767-2010 National Food Safety Standard Older Infants and Young Children
                            Formula</a></li>
                    </ul>

                </el-main>
                <el-aside width="360px">
                    <div style="text-align: center;margin-top: 40px; line-height: 100px;font-size: 50px;color: gold;font-weight: 600;text-shadow:#cca033 2px 8px 9px;;">
                        预
                        <br> 留
                        <br> 广
                        <br> 告
                        <br> 位
                    </div>
                </el-aside>
            </el-container>
            <el-footer class="dbHomeFooter" style="height: 100px;">
                <p>
                    2012-2017 ChemLinked 2 <a href="#">Term of use</a> <a href="#">Privacv</a> <a href="#">Copyright</a>
                </p>
            </el-footer>
        </el-container>
    </div>
</template>
<script>
    export default {
        name: 'databaseDetail',
        data() {
            return {
                dbStoreDialog: false,
                tableDetailData: [
                    {
                        date: '1China November 2017',
                        name: '2018-3-1',
                        address: 'To be enforced',
                        id: 1,
                        switchValue: true
                    }, {
                        date: '2China November 2017',
                        name: '2018-3-1',
                        address: 'To be enforced',
                        id: 2,
                        switchValue: false
                    }, {
                        date: '3China November 2017',
                        name: '2018-3-1',
                        address: 'To be enforced',
                        id: 3,
                        switchValue: true
                    }, {
                        date: '4China November 2017',
                        name: '2018-3-1',
                        address: 'To be enforced',
                        id: 4,
                        switchValue: false
                    }, {
                        date: '5China November 2017',
                        name: '2018-3-1',
                        address: 'To be enforced',
                        id: 5,
                        switchValue: true
                    }
                ],
            }
        },
        mounted: function () {
// ************axios 请求后台数据 demo*****************
            var that = this;
            // console.log(window.location.hash.split('=')[1]);
            that.$http.get("https://service.chemlinked.com/api/v1/coslist/headinfo",
                {name: "1"})
                .then(function (res) {
                    // console.log('11', res.data.data)
                }, function (error) {
                    console.log(error)
                });
            var qs = require('querystring');
            that.$http.post('https://service.chemlinked.com/api/v1/coslist/search',
                qs.stringify({
                    keyword: "CI",
                    page: 0,
                    limit: 10
                }), {
                    headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
                })
                .then(function (res) {
                    // console.log(res.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        methods: {
            dbStore() {
                this.dbStoreDialog = false;
                console.log('success')
            }
        }
    }
</script>
<style lang="scss">
    #databaseDetail {
        $borderColor: #c5a835;
        $textColor: #5a5050;
        $detailTextColor: #494949;
        %aStyle {
            color: white;
            font-weight: 600;
            text-decoration: none;
        }
        .dbDetailHeader {
            padding: 0 100px;
            box-sizing: border-box;
            width: 100%;
            line-height: 80px;
            background-color: goldenrod;
            > div {
                > a:nth-of-type(1) {
                    @extend %aStyle;
                }
                > a:nth-of-type(2) {
                    @extend %aStyle;
                    float: right;
                }
            }

        }
        .dbDetailContainer {
            width: 1150px;
            margin: 20px auto;
            .el-main {
                padding: 0 20px 0 0;
                box-sizing: border-box;
                color: $detailTextColor;
                font-size: 15px;
                .el-dialog {
                    text-align: left;
                    border-radius: 10px;
                    box-shadow: 0 0 5px #757070;
                    .el-dialog__title {
                        font-weight: 600;
                    }
                    .el-dialog__body {
                        font-size: 17px;
                        padding: 13px 20px;
                    }
                }
                > .shareLists {
                    list-style: none;
                    margin: 15px 0;
                    > li {
                        display: inline-block;
                        &:nth-last-of-type(1) {
                            margin-left: 20px;
                        }
                        > a {
                            display: block;
                            width: 32px;
                            height: 32px;
                        }
                        img {
                            width: 100%;
                        }
                    }

                }
                >h4{font-size: 17px}
                > h5 {
                    font-size: 16px;
                    padding: 0 0 8px 0;
                    box-sizing: border-box;
                    margin-top: 20px;
                    border-bottom: 2px solid #8a7217;
                }
                > .el-table {
                    font-size: 13px;
                    margin-top: 20px;
                    .column1 {
                        text-align: center;
                    }
                    .el-button {
                        padding: 3px 10px;
                    }

                    tr:hover > td {
                        background-color: white;
                    }
                    border-color: $borderColor;
                    &::before {
                        background-color: $borderColor;
                    }
                    &::after {
                        background-color: $borderColor;
                    }
                    th {
                        background-color: #f0e4d6;
                        text-align: left;
                        border-right: none;
                        border-color: $borderColor;
                        padding: 5px 0;
                        color: $textColor !important;
                    }
                    td {
                        text-align: left;
                        border-right: none;
                        border-color: $borderColor;
                        padding: 5px 0;
                    }
                }
                > .IntroductionText {
                    font-size: 15px;
                    margin: 20px 0;
                }
                > .historyLists {
                    margin-top: 15px;
                    li {
                        margin: 8px 0;
                        list-style: none !important;
                    }

                    a {
                        text-decoration: none;
                        display: inline-block;
                        margin-left: 30px;
                        &:hover {
                            text-decoration: underline;
                        }
                    }

                }
                > .referenceLists {
                    a {
                        margin: 0;
                    }
                }
            }
            .el-aside {
                padding: 0;
                border: 1px solid #8b6d36;
                box-sizing: border-box;
                height: 850px;
                font-size: 12px;
            }
        }
        .dbHomeFooter {
            background-color: #292929;
            p {
                text-align: center;
                color: #929292;
                font-size: 13px;
                margin-top: 40px;
                > a {
                    color: #929292;
                    padding: 0 5px;
                }
            }
        }
    }
</style>


