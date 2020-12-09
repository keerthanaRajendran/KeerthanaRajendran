define(["require", "exports", "../../../src/list-view/index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var dataSource = [
        {
            id: '01', text: 'Music', icon: 'folder',
            child: [
                { id: '01-01', text: 'Gouttes.mp3', icon: 'file' }
            ]
        },
        {
            id: '02', text: 'Videos', icon: 'folder',
            child: [
                { id: '02-01', text: 'Naturals.mp4', icon: 'file' },
                { id: '02-02', text: 'Wild.mpeg', icon: 'file' },
            ]
        },
        {
            id: '03', text: 'Documents', icon: 'folder',
            child: [
                { id: '03-01', text: 'Environment Pollution.docx', icon: 'file' },
                { id: '03-02', text: 'Global Water, Sanitation, & Hygiene.docx', icon: 'file' },
                { id: '03-03', text: 'Global Warming.ppt', icon: 'file' },
                { id: '03-04', text: 'Social Network.pdf', icon: 'file' },
                { id: '03-05', text: 'Youth Empowerment.pdf', icon: 'file' },
            ]
        },
        {
            id: '04', text: 'Pictures', icon: 'folder',
            child: [
                {
                    id: '04-01', text: 'Camera Roll', icon: 'folder',
                    child: [
                        { id: '04-01-01', text: 'WIN_20160726_094117.JPG', icon: 'file' },
                        { id: '04-01-02', text: 'WIN_20160726_094118.JPG', icon: 'file' },
                        { id: '04-01-03', text: 'WIN_20160726_094119.JPG', icon: 'file' }
                    ]
                },
                {
                    id: '04-02', text: 'Wind.jpg', icon: 'file'
                },
                {
                    id: '04-02', text: 'Stone.jpg', icon: 'file'
                },
                {
                    id: '04-02', text: 'Home.jpg', icon: 'file'
                },
                {
                    id: '04-02', text: 'Bridge.png', icon: 'file'
                }
            ]
        },
        {
            id: '05', text: 'Downloads', icon: 'folder',
            child: [
                { id: '05-01', text: 'UI-Guide.pdf', icon: 'file' },
                { id: '05-02', text: 'Tutorials.zip', icon: 'file' },
                { id: '05-03', text: 'Game.exe', icon: 'file' },
                { id: '05-04', text: 'TypeScript.7z', icon: 'file' },
            ]
        },
    ];
    var nestedListObj = new index_1.ListView({
        dataSource: dataSource,
        fields: { iconCss: 'icon', tooltip: 'text' },
        showIcon: true,
        headerTitle: 'Folders',
        showHeader: true,
        animation: { duration: 0 },
        actionBegin: function(args)
        {
			console.log("actionBegin");
            if(args && !args.isReverse)
              args.endList.getElementsByTagName("span")[0].textContent = "TextChanged";
        },
        actionComplete: function(args)
        {
            console.log("actionComplete");
        }
    });
    nestedListObj.appendTo('#nested-list');
});
