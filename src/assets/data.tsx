export type Section = {
    name: string;
    // each array should contain only 2 strings
    questions: Array<Array<string>>;
}

type Data = {
    name: string;
    sections: Array<Section>;
}

const data: Data = {
    name: 'BTU FAQ',
    sections: [
        {
            name: "credits",
            questions: [
                [
                    'ჩვენი პროგრამები გახდა 180 კრედიტიანი. შესაძლებელია თუ არა დავრჩე 240 კრედიტიანზე?',
                    'ეს შესაძლებელია მხოლოდ მეოთხე კურსის სტუდენტებისათვის. ოღონდ ამ შემთხვევაში სემესტრს ვეღარ დაიმატებენ და საგნების შეტენვის შემთხვევაში სტუდენტის სტატუსს კარგავენ და 4 წელი ჰაერზე მიდის'
                ],
                [
                    'შეიძლება თუ არა, პირველ სემესტრში 28 და მეორე სემესტრში 32 კრედიტი გავიარო?',
                    'კი, რაც მთავარია წელიწადში 60 კრედიტი გაიაროთ'
                ],
                [
                    'რამდენია ერთი კრედიტის თანხა?',
                    'ერთი კრედიტის თანხის მისაღებად თქვენი სწავლის საფასური(გრანტის ჩაუთვლელად) უნდა გაყოთ 60-ზე. მაგალითად, 2650/60=44.16 ლარი'
                ],
                [
                    'საგანი თუ შემეტენა, როდის უნდა გადავიხადო მისი საფასური?',
                    'თანხას იხდით მხოლოდ მაშინ, როდესაც დამატებითი კრედიტების აღებას გეგმავთ, ანუ 30 კრედიტის გარდა კიდევ იმ საგანს რომ იღებთ'
                ],
            ]
        },
        {
            name: "technical",
            questions: [
                [
                    'როგორ ავიღო Office პროდუქტების ლიცენზია?',
                    'ამისათვის უნდა მიწეროთ [IT სამსახურს](https://btuserv.atlassian.net/servicedesk/customer/portal/4)'
                ],
                [
                    'რატომ ვერ შევდივარ jira-ში?',
                    'ჯერ საჭიროა, დარეგისტრირდეთ(აუცილებელი არაა, ბითიუს მეილი ჩაწეროთ) და მერე შეძლებთ შევლას'
                ]
            ]
        },
        {
            name: "IT",
            questions: [
                [
                    'რა ენა ისწავლება Android Development-ის კურსზე?',
                    'ლექტორის ნებაზეა დამოკიდებული. შეიძლება გასწავლოს ან java, ან kotlin'
                ]
            ]
        },
        {
            name: "general",
            questions: [
                [
                    "ინგლისურის რა დონეა აუცილებელი?",
                    "აუცილებელია B2. შეგიძლიათ ასევე მიიტანოთ ინგლისური ენის დამადასტურებელი სერტიფიკატი."
                ]
            ]
        }
    ],
}

export default data;