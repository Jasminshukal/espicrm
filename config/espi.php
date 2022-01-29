<?php

return [
    'enquires'         => [
        'smart'            => true,
        'multi_term'       => true,
        'case_insensitive' => true,
        'use_wildcards'    => false,
        'starts_with'      => false,
    ],
    'enquires_detail'         => [
        'marital_status' =>  ['Single','Married','Divorced','Separated','Widowed','Unknown'],
        'multi_term'       => true,
        'case_insensitive' => true,
        'use_wildcards'    => false,
        'starts_with'      => false,
        'country_interested' => ['Canada','USA','UK','Australia','Other'],
        'document_list' => [
            '10th' => '10th Result',
            '12th' => '12th Result',
            'diploma' => 'Diploma Result',
            'bachelor_degree' => 'Bachelor Degree',
            'master' => 'Master Degree',
            'transcript' => 'Transcript Documents',
            'work_experience' => 'Work Experience Documents',
            'Resume' => 'Resume Documents',
            'lor' => 'LOR Documents',
            'other' => 'Other Documents',
        ],
        'education_level' => [
            '10' => '10th',
            '12' => '12th',
            'diploma' => 'Diploma',
            'bachelor' => 'Bachelor',
            'master' => 'Master',
            'phd' => 'Phd',
        ],
    ],
    'follow_up_status' => [
        'coaching_enroll' => 'Coaching Enroll',
        'counselling_enroll' => 'Counselling Enroll',
        'in_progress' => 'In Progress',
        'enroll_visa' => 'Enroll Visa',
        'fail' => 'Fail',
    ],
    'application_follow_up_status' => [
        "application_given"=>"Application Given",
        "application_submitted"=>"Application Submitted",
        "unconditional_offer_received"=>"Unconditional Offer Received",
        "conditional_offer_received"=>"Conditional Offer Received",
        "fees_paid"=>"Fees Paid",
        "visa_file_submitted"=>"Visa File Submitted",
        "visa_grant"=>"Visa Grant",
        "visa_rejected"=>"Visa Rejected",
        "refund_applied"=>"Refund Applied",
    ],
    'currency_list' => [
        'AUD' => 'Australia Dollar (AUD)',
        'USD' => 'United States Dollar (USD)',
        'SGD' => 'Singapore Dollar (SGD)',
        'CAD' => 'Canada Dollar (CAD)',
        'SYP' => 'Syria Pound (SYP)',
        'INR' => 'India Rupee (INR)',
    ],
    'payment_mode' => [
        'CASE' => 'Cash Payment',
        'ONLINE' => 'Online Payment',
        'CHECK' => 'Check Payment',
    ],
    'payment_title' => [
        'enroll_coaching' => 'Enroll coaching',
        'enroll_counselling' => 'Enroll counselling',
        'enroll_visa' => 'Enroll Visa',
    ],

];
