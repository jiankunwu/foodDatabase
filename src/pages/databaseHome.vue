<template>
    <div id="databaseHome" @click="listStatusFlag=false">
        <el-container>
            <el-header class="dbHomeHeader0" style="height: 160px;">
                <div class="dbHomeHeader">
                    <h1>THE ASIAN FOOD REGULATORY DATABASE</h1>
                    <div>
                        <el-input placeholder="please input name/G8 No./other keyword..."
                                  v-model="dbSearchText"></el-input>
                        <span class="el-icon-search" @click="homeNavDoSearch"></span>
                    </div>
                </div>
                <div class="dbHomeNav">
                    <h5>Keywords: </h5>
                    <span> < </span>
                    <ul>
                        <li v-for="(hdItem,index) in dbHomeNavData"><a :class="{dbNavActive:dbNavActiveIndex===index}"
                                                                       @click="dbNavClick(index)">{{hdItem}}</a></li>
                    </ul>
                    <span> > </span>
                    <div>
                        <div @click.stop="listStatusFlag=!listStatusFlag">
                            <input type="text" disabled v-model="dbNavStatus">
                        </div>
                        <span class="el-icon-caret-bottom" @click.stop="listStatusFlag=!listStatusFlag"></span>
                        <div class="transitionList">
                            <span class="dbTriangle el-icon-caret-top" v-show="listStatusFlag"></span>
                            <transition name="showMenu">
                                <ul class="statusList" v-show="listStatusFlag">
                                    <li v-for="statusItem in dbStatusData" @click="statusChange(statusItem)">
                                        {{statusItem}}
                                    </li>
                                </ul>
                            </transition>
                        </div>
                    </div>
                </div>
            </el-header>
            <el-container class="dbHomeMainContainer">
                <el-aside style="width: 260px;height: 730px;">
                    <el-tree :data="dbHomeTreeData" :props="defaultProps" node-key="id" accordion
                             :default-expanded-keys="[1]" @node-click="dbHomeNodeClick" :highlight-current="true"
                             :expand-on-click-node="false" ref="tree">

                    </el-tree>
                    <div class="dbFavorites" @click="toFavourite">
                        <span class="el-icon-star-on"></span>
                        <span>My favorites</span>
                    </div>
                </el-aside>
                <el-main>
                    <router-view/>
                </el-main>
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
        name: 'DatabaseHome',
        data() {
            return {
                dbSearchText: '',
                listStatusFlag: false,
                dbNavStatus: 'Status',
                dbNavActiveIndex: 0,
                dbHomeNavData: ['All', 'General', 'Product', 'Hygienic', 'Testing', 'Packing & Transportation', 'Other', 'Regulation'],
                dbStatusData: ['In force', ' To be enforced', 'Invalid',],
                dbHomeTreeData: [
                    {
                        id: 1,
                        label: 'All category',
                        children: [
                            {
                                id: 11,
                                label: 'Milk & milk products',
                            }, {
                                id: 12,
                                label: 'Oil & oil products',
                            }, {
                                id: 13,
                                label: 'Frozen drinks',
                            }, {
                                id: 14,
                                label: 'Fruits & vegetables',
                            }, {
                                id: 15,
                                label: 'Candy products',
                            }, {
                                id: 16,
                                label: 'Grain & grain products',
                            }, {
                                id: 17,
                                label: 'Bakery food',
                            }, {
                                id: 18,
                                label: 'Meat & meat products',
                            }, {
                                id: 19,
                                label: 'Aquatic & aquatic products',
                            }, {
                                id: 110,
                                label: 'Egg & egg products',
                            }, {
                                id: 111,
                                label: 'Sweeteners',
                            }, {
                                id: 112,
                                label: 'Condiment',
                            }, {
                                id: 113,
                                label: 'Food for special dietary uses',
                            }, {
                                id: 114,
                                label: 'Health food',
                            }, {
                                id: 115,
                                label: 'Beverage',
                            }, {
                                id: 116,
                                label: 'Wine',
                            }, {
                                id: 117,
                                label: 'Food additive',
                            }, {
                                id: 118,
                                label: 'Food contact materials',
                            }, {
                                id: 119,
                                label: 'Food packaging',
                            }, {
                                id: 120,
                                label: 'Nutritional fortification substances',
                            }, {
                                id: 121,
                                label: 'Infant formula food',
                            }, {
                                id: 122,
                                label: 'Others',
                            }]
                    }
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        mounted() {
            this.$refs.tree.setCurrentKey(this.dbHomeTreeData[0].id);
            this.$router.push({path: '/DatabaseHome'})
        },
        methods: {
            toFavourite() {
                this.$router.push({path: '/DatabaseHome/databaseFavourite'})
            },
            dbNavClick(data) {
                this.$router.push({path: '/DatabaseHome/databaseHomeLists'});
                this.dbNavActiveIndex = data;
            },
            statusChange(status) {
                this.dbNavStatus = status;
                this.listStatusFlag = !this.listStatusFlag;
                console.log(status)
            },
            dbHomeNodeClick(data) {
                this.$router.push({path: '/DatabaseHome/databaseHomeLists'});
                console.log(data.id)
            },
            homeNavDoSearch() {
                console.log('homeNavDoSearch')
            }
        }
    }
</script>
<style lang="scss">
    #databaseHome {
        $borderColor: #c5a835;
        $textColor: #5a5050;
        .dbHomeHeader0 {
            background-color: #8f5806;
            color: #fff;
            position: relative;
            .dbHomeHeader {
                width: 530px;
                margin: 40px auto 0;
                > div {
                    width: 100%;
                    position: relative;
                    .el-input__inner {
                        border-radius: 30px;
                    }
                    > span {
                        position: absolute;
                        right: 5px;
                        top: 50%;
                        margin-top: -20px;
                        width: 40px;
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                        cursor: pointer;
                        font-size: 30px;
                        color: #c1901f;
                        &:hover {
                            color: #e2ad20;
                        }
                    }
                }
            }
            .dbHomeNav {
                width: 1116px;
                height: 60px;
                background-color: #f0e4d6;
                position: absolute;
                bottom: -45px;
                left: 50%;
                margin-left: -558px;
                padding: 17px 30px;
                box-sizing: border-box;
                box-shadow: 0 1px 3px #dbcbb4;
                > h5 {
                    display: inline-block;
                    color: #8a5603;
                    margin-right: 20px;
                }
                > span {
                    color: #8a5603;
                    font-weight: 600;
                }
                > ul {
                    display: inline-block;
                    list-style: none;
                    padding: 0 10px;
                    box-sizing: border-box;
                    > li {
                        display: inline-block;
                        cursor: pointer;
                        .dbNavActive {
                            color: white;
                            background-color: #8a4f00;
                        }
                        a {
                            font-size: 14px;
                            text-decoration: none;
                            color: $textColor;
                            display: inline-block;
                            padding: 1px 10px;
                            border-radius: 10px;
                        }
                    }

                }
                > div {
                    display: inline-block;
                    width: 140px;
                    height: 25px;
                    float: right;
                    position: relative;
                    input {
                        width: 100%;
                        height: 25px;
                        border: 1px solid #916318;
                        border-radius: 30px;
                        background-color: white;
                        padding-left: 10px;
                        box-sizing: border-box;
                        outline: none;
                        color: $textColor;
                    }
                    .el-icon-caret-bottom {
                        position: absolute;
                        right: 10px;
                        top: 50%;
                        color: black;
                        width: 20px;
                        font-size: 20px;
                        height: 20px;
                        margin-top: -11px;
                        cursor: pointer;
                    }
                    .transitionList {
                        position: relative;
                    }
                    .dbTriangle {
                        position: absolute;
                        top: -5px;
                        left: 45%;
                        font-size: 20px;
                        z-index: 9999;
                    }

                    .showMenu-enter {
                        height: 0;
                    }
                    .showMenu-enter-active {
                        transition: all .2s linear;
                    }
                    .showMenu-enter-to {
                        height: 78px;
                    }
                    .showMenu-leave,
                    .showMenu-leave-active,
                    .showMenu-leave-to {
                        height: 0;
                    }
                    ul {
                        position: absolute;
                        top: 7px;
                        right: 3px;
                        background-color: white;
                        list-style: none;
                        border-radius: 5px;
                        z-index: 2018;
                        padding: 5px 0;
                        box-shadow: 0 0 4px #e8dfd0;
                        height: 78px;
                        overflow: hidden;
                        li {
                            color: $textColor;
                            padding: 5px 20px;
                            font-size: 12px;
                            cursor: pointer;
                            &:hover {
                                background-color: #c6a7ff;
                            }
                        }
                    }
                }
            }
        }
        .dbHomeMainContainer {
            width: 1115px;
            margin: 55px auto 0;
            > .el-aside {
                padding: 20px 30px 0 0;
                box-sizing: border-box;
                .el-tree {
                    color: #987f1e;
                }
                .el-tree-node__children {
                    > div {
                        padding-top: 2px;
                    }
                }
                .el-tree--highlight-current {
                    .el-tree-node.is-current {
                        > .el-tree-node__content {
                            background-color: #f0e5d7;
                        }
                    }
                }
                .el-tree-node__content:hover {
                    background-color: #f0e5d7;
                }
                .dbFavorites {
                    margin-top: 10px;
                    cursor: pointer;
                    span:nth-of-type(1) {
                        color: $borderColor;
                        font-size: 23px;
                    }
                    span:nth-of-type(2) {
                        color: #5f6366;
                        margin-left: 13px;
                        &:hover {
                            color: goldenrod;
                        }
                    }
                }
            }
            > .el-main {
                padding: 20px 0 20px 0;
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


